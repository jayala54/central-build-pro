export function trackEvent(eventName, parameters = {}) {
  if (typeof window === 'undefined') return;

  const analyticsWindow = /** @type {Window & { dataLayer?: Array<Record<string, unknown>> }} */ (window);
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.dataLayer.push({ event: eventName, ...parameters });
}

export function trackContactClick(method, location) {
  trackEvent('contact_click', {
    contact_method: method,
    link_location: location,
  });
}
