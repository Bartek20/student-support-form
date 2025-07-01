import './style.css'

import { validateForm } from './utils.js';

const form = document.getElementById('supportForm');
const successMessage = document.getElementById('form-success');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  successMessage.hidden = true;


  const data = {
    name: form.name.value,
    index: form.index.value,
    email: form.email.value,
    type: form.type.value,
    message: form.message.value,
    files: form.attachments.files ? Array.from(form.attachments.files) : []
  };

  const errors = validateForm(data);

  [...form.elements].forEach(el => el.classList.remove('error'));
  document.querySelectorAll('.form-error').forEach(el => el.textContent = '');

  if (Object.keys(errors).length > 0) {
    for (const field in errors) {
      const input = form.elements[field];
      const errorSpan = document.querySelector(`[data-error-for="${field}"]`);
      if (input) input.classList.add('error');
      if (errorSpan) errorSpan.textContent = errors[field];
    }
  } else {
    successMessage.hidden = false;
    form.reset();
  }
});
