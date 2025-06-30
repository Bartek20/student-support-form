const { validateForm } = require('../src/utils');

describe('validateForm()', () => {
  it('should return errors for empty fields', () => {
    const errors = validateForm({
      name: '',
      index: '',
      email: '',
      type: '',
      message: ''
    });

    expect(errors).toHaveProperty('name');
    expect(errors).toHaveProperty('index');
    expect(errors).toHaveProperty('email');
    expect(errors).toHaveProperty('type');
    expect(errors).toHaveProperty('message');
  });

  it('should return an error for invalid email', () => {
    const errors = validateForm({
      name: 'Jan Kowalski',
    index: '123456',
      email: 'niepoprawny-email',
      type: 'Problem techniczny',
      message: 'To jest poprawna wiadomość'
    });

    expect(errors).toHaveProperty('email');
    expect(errors.email).toMatch(/email/i);
  });

  it('should return an error for invalid email domain', () => {
    const errors = validateForm({
      name: 'Jan Kowalski',
    index: '123456',
      email: 'jan.kowalski@gmail.com',
      type: 'Problem techniczny',
      message: 'To jest poprawna wiadomość'
    });

    expect(errors).toHaveProperty('email');
    expect(errors.email).toMatch(/email/i);
  });

  it('should return no errors for valid data', () => {
    const errors = validateForm({
      name: 'Jan Kowalski',
      index: '123456',
      email: 'jan.kowalski@student.wroclaw.merito.pl',
      type: 'Sugestia dot. zajęć',
      message: 'To jest poprawna wiadomość o długości powyżej 10 znaków.'
    });

    expect(errors).toEqual({});
  });
});
