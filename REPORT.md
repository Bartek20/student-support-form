# Sprawozdanie z realizacji projektu

## 🧾 Informacje ogólne

**Tytuł projektu:** Formularz wsparcia studenta<br>
**Technologie:** Node.js, HTML, CSS, JavaScript<br>
**Repozytorium:** [https://github.com/Bartek20/student-support-form](#)<br>
**Deployment:** GitHub Pages<br>
**Autor:** Bartłomiej Radoń<br>
**Uczelnia:** Uniwersytet WSB Merito we Wrocławiu<br>

---

## Etap 1: Inicjalizacja projektu (Lab 1)

Projekt został zainicjalizowany w katalogu lokalnym za pomocą komend:

```bash
mkdir student-support-form
cd student-support-form
git init
npm init -y
```

**Dodano plik `README.md` z następującymi elementami:**
- Krótki opis projektu
- Informacja o przeznaczeniu edukacyjnym
- Wykorzystane technologie
- Licencja (MIT)

**Pierwszy commit:**
- initial commit

## Etap 2: Struktura plików i formularz (Lab 1)

W folderze `public/` utworzono stronę `index.html`, zawierającą formularz kontaktowy dla studentów. Formularz zawiera pięć pól:

- Imię i nazwisko (`text`)
- Numer indeksu (`text`)
- Email (`email`)
- Typ zgłoszenia (`select`)
- Wiadomość (`textarea`)

## Etap 3: Walidacja formularza (Lab 2 – TDD)

W pliku `src/utils.js` zaimplementowano funkcję `validateForm()`, która wykonuje weryfikację danych formularza:

- Pole `name` musi składać się z conajmniej 2 członów
- Pole `index` musi sie składać z 6-8 cyfr
- Pole `email` musi mieć poprawny format
- Pole `type` nie może być puste
- Pole `message` wymaga min. 10 znaków

**Funkcja zwraca obiekt z błędami, który będzie wykorzystywany w interfejsie użytkownika oraz testach jednostkowych.**

## Etap 4: Testy jednostkowe z Jest (Lab 2 – TDD)

Do projektu dodano framework `jest` i skonfigurowano testy w folderze `tests/`.

**Zastosowano podejście TDD:**
- Najpierw zaplanowano przypadki testowe
- Następnie implementowano walidację w `utils.js`
- Uruchomiono testy, które przeszły sukcesem

**Zakres testów:**
- Wszystkie pola puste → 5 błędów
- Błędny adres email → 1 błąd
- Niedozwolona domena adresu email → 1 błąd
- Poprawne dane → brak błędów

Testy można uruchomić lokalnie komendą:
```bash
npm test
```
**Uwaga techniczna #1:**<br>
Do repozytorium dodano plik `.gitignore`.

**Zawiera on wpisy ignorujące m.in.:**
- katalog `node_modules/`
- pliki środowiskowe `.env`
- dane testowe (`coverage/`, `.nyc_output/`)
- tymczasowe pliki systemowe (`.DS_Store`)
- pliki robocze edytorów (`.vscode/`)

**Uwaga techniczna #2:**<br>
Podczas konfigurowania testów z `jest` wystąpił problem z `import/export`, który został rozwiązany przez przejście na składnię CommonJS (`require/module.exports`), zgodnie z domyślnym środowiskiem testowym `jest`.
