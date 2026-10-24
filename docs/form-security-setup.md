# Website inquiry protection

The inquiry forms support EmailJS reCAPTCHA v2 verification. The CAPTCHA becomes active only after both configuration steps below are complete.

## 1. Create the reCAPTCHA keys

1. In Google reCAPTCHA, register a **reCAPTCHA v2** site using the **I'm not a robot Checkbox** challenge.
2. Add `j-nsw.com` as an allowed domain.
3. Copy the public site key and private secret key.

## 2. Configure the site build

Add a GitHub Actions repository secret named `VITE_RECAPTCHA_SITE_KEY` containing the public site key, then rerun the deployment workflow. Confirm the checkbox appears on both forms before enabling enforcement in EmailJS.

## 3. Configure EmailJS

1. Open template `template_b9mf40y` in the EmailJS dashboard.
2. Open **Settings** and enable **reCAPTCHA V2 verification**.
3. Enter the Google reCAPTCHA secret key and save the template.
4. In **Domains**, allow only `https://j-nsw.com` and any intentionally used preview domain.
5. Add `{{source}}` to the email body and use a consistent subject such as `[J&N Website Inquiry] {{project_type}} - {{name}}`.

EmailJS performs the server-side token verification. Do not place the secret key in this repository or in a `VITE_` environment variable.

## Verification

1. Confirm both public forms display the checkbox.
2. Confirm the submit button remains disabled until verification succeeds.
3. Submit a test inquiry and confirm it appears in EmailJS **Email History**.
4. Confirm a request without a valid CAPTCHA token is rejected by EmailJS.

Website-generated messages include a `source` value of `website_contact_form` or `website_quote_form`. Messages absent from EmailJS Email History were sent directly to the public email address and cannot be stopped by the form CAPTCHA.
