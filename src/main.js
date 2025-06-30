import './style.css'

import { validateForm } from './utils.js';

const form = document.getElementById('supportForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

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

  if (Object.keys(errors).length > 0) {
    for (const field in errors) {
      const input = form.elements[field];
      if (input) {
        input.classList.add('error');
      }
    }
    alert('Formularz zawiera błędy!');
  } else {
    alert('Formularz przeszedł walidację!');
    form.reset();
  }
});
