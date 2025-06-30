export function validateForm({ name, index, email, type, message, files }) {
  const errors = {};

  if (!name || name.trim().split(" ").length < 2) {
    errors.name = "Imię i nazwisko jest wymagane.";
  }

  if (!index || !/^\d{6,8}$/.test(index)) {
    errors.index = "Numer indeksu musi składać się z 6-8 cyfr.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "Adres email jest nieprawidłowy.";
  }

  const allowedDomains = ["wsb.pl", "merito.pl"];
  const emailDomain = email?.split("@")?.[1];
  if (!('email' in errors) && !allowedDomains.some((domain) => emailDomain.endsWith(domain))) {
    errors.email = "Adres email musi należeć do domeny uczelnianej.";
  }

  if (!type || type.trim() === "") {
    errors.type = "Musisz wybrać typ zgłoszenia.";
  }

  if (!message || message.trim().length < 10) {
    errors.message = "Wiadomość musi mieć co najmniej 10 znaków.";
  }

  for (const file of files || []) {
    if (file.size > 5 * 1024 * 1024) {
      errors.files = "Plik nie może być większy niż 5 MB.";
      break;
    }
    if (!["application/pdf", "image/jpeg", "image/png"].includes(file.type)) {
      errors.files = "Dozwolone są tylko pliki PDF, JPG i PNG.";
      break;
    }
  }

  return errors;
}

