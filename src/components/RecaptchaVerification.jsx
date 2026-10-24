import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

export const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY?.trim() || '';
export const isRecaptchaConfigured = Boolean(recaptchaSiteKey);

let recaptchaScriptPromise;

function loadRecaptcha() {
  if (window.grecaptcha?.render) return Promise.resolve(window.grecaptcha);
  if (recaptchaScriptPromise) return recaptchaScriptPromise;

  recaptchaScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-recaptcha-script]');
    const script = existing || document.createElement('script');

    const handleLoad = () => resolve(window.grecaptcha);
    const handleError = () => reject(new Error('Unable to load reCAPTCHA'));

    script.addEventListener('load', handleLoad, { once: true });
    script.addEventListener('error', handleError, { once: true });

    if (!existing) {
      script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.dataset.recaptchaScript = 'true';
      document.head.appendChild(script);
    }
  });

  return recaptchaScriptPromise;
}

const RecaptchaVerification = forwardRef(function RecaptchaVerification({ onChange }, ref) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onChangeRef = useRef(onChange);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useImperativeHandle(ref, () => ({
    reset() {
      if (widgetIdRef.current !== null && window.grecaptcha?.reset) {
        window.grecaptcha.reset(widgetIdRef.current);
      }
      onChangeRef.current('');
    },
  }), []);

  useEffect(() => {
    if (!isRecaptchaConfigured) return undefined;
    let cancelled = false;

    loadRecaptcha()
      .then((grecaptcha) => {
        if (cancelled || !containerRef.current || widgetIdRef.current !== null) return;
        widgetIdRef.current = grecaptcha.render(containerRef.current, {
          sitekey: recaptchaSiteKey,
          callback: (token) => onChangeRef.current(token),
          'expired-callback': () => onChangeRef.current(''),
          'error-callback': () => {
            onChangeRef.current('');
            setLoadError(true);
          },
        });
      })
      .catch(() => setLoadError(true));

    return () => { cancelled = true; };
  }, []);

  if (!isRecaptchaConfigured) return null;

  return (
    <div className="space-y-2">
      <div ref={containerRef} className="min-h-[78px] overflow-hidden" aria-label="Human verification" />
      {loadError && (
        <p className="text-sm text-red-600" role="alert">Verification could not load. Refresh the page or call (321) 695-4964.</p>
      )}
    </div>
  );
});

export default RecaptchaVerification;
