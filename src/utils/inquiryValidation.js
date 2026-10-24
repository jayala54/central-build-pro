const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInquiryContact({ name, email, phone }) {
  if (!name?.trim() || name.trim().length < 2) {
    return 'Please enter your full name.';
  }

  if (!email?.trim() || !EMAIL_PATTERN.test(email.trim())) {
    return 'Please enter a valid email address.';
  }

  const phoneDigits = phone?.replace(/\D/g, '') || '';
  if (phoneDigits.length < 10) {
    return 'Please enter a valid phone number with area code.';
  }

  return '';
}
