import { validateForm } from "../utils";

describe("validateForm()", () => {
  it("should return errors for empty fields", () => {
    const errors = validateForm({
      name: "",
      index: "",
      email: "",
      type: "",
      message: "",
    });

    expect(errors).toHaveProperty("name");
    expect(errors).toHaveProperty("index");
    expect(errors).toHaveProperty("email");
    expect(errors).toHaveProperty("type");
    expect(errors).toHaveProperty("message");

    expect(errors.name).toBe("Imię i nazwisko jest wymagane.");
    expect(errors.index).toBe("Numer indeksu musi składać się z 6-8 cyfr.");
    expect(errors.email).toBe("Adres email jest nieprawidłowy.");
    expect(errors.type).toBe("Musisz wybrać typ zgłoszenia.");
    expect(errors.message).toBe("Wiadomość musi mieć co najmniej 10 znaków."); 
  });

  it("should return an error for invalid index", () => {
    const errors = validateForm({
      name: "Jan Kowalski",
      index: "123456232442r3",
      email: "niepoprawny-email",
      type: "Problem techniczny",
      message: "To jest poprawna wiadomość",
    });

    expect(errors).toHaveProperty("index");
    expect(errors.index).toBe("Numer indeksu musi składać się z 6-8 cyfr.");
  });

  it("should return an error for invalid email", () => {
    const errors = validateForm({
      name: "Jan Kowalski",
      index: "123456",
      email: "niepoprawny-email",
      type: "Problem techniczny",
      message: "To jest poprawna wiadomość",
    });

    expect(errors).toHaveProperty("email");
    expect(errors.email).toBe("Adres email jest nieprawidłowy.");
  });

  it("should return an error for invalid email domain", () => {
    const errors = validateForm({
      name: "Jan Kowalski",
      index: "123456",
      email: "jan.kowalski@gmail.com",
      type: "Problem techniczny",
      message: "To jest poprawna wiadomość",
    });

    expect(errors).toHaveProperty("email");
    expect(errors.email).toBe("Adres email musi należeć do domeny uczelnianej.");
  });

  it("should return an error for empty type", () => {
    const errors = validateForm({
      name: "Jan Kowalski",
      index: "123456",
      email: "",
      type: "",
      message: "To jest poprawna wiadomość",
    });

    expect(errors).toHaveProperty("type");
    expect(errors.type).toBe("Musisz wybrać typ zgłoszenia.");
  });

  it("should return an error for too short message", () => {
    const errors = validateForm({
      name: "Jan Kowalski",
      index: "123456",
      email: "jan.kowalski@gmail.com",
      type: "Problem techniczny",
      message: "To",
    });

    expect(errors).toHaveProperty("message");
    expect(errors.message).toBe("Wiadomość musi mieć co najmniej 10 znaków.");
  });

  it("should return no errors for valid data", () => {
    const errors = validateForm({
      name: "Jan Kowalski",
      index: "123456",
      email: "jan.kowalski@student.wroclaw.merito.pl",
      type: "Sugestia dot. zajęć",
      message: "To jest poprawna wiadomość o długości powyżej 10 znaków.",
    });

    expect(errors).toEqual({});
  });
});
