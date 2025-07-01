# Sprawozdanie z realizacji projektu

## 🧾 Informacje ogólne

**Tytuł projektu:** Formularz wsparcia studenta<br>
**Technologie:** Node.js, HTML, CSS, JavaScript<br>
**Repozytorium:** [https://github.com/Bartek20/student-support-form](https://github.com/Bartek20/student-support-form)<br>
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

## Etap 5: Praca na nowym branchu – integracja formularza (Lab 2)

Zgodnie z dobrymi praktykami, do integracji formularza z funkcją walidacji utworzono osobny branch `feature/form-validation`.

**Zakres zmian:**
- Utworzono `src/main.js`, który reaguje na `submit`
- Formularz pobiera dane i przekazuje je do funkcji `validateForm`

Po przetestowaniu formularza lokalnie, zmiany zostaną przesłane jako **pull request** do `main`.

## Etap 6: Budowa projektu z użyciem Vite (Lab 3 – Build)

Do projektu dodano bundler Vite, który umożliwia:

- użycie nowoczesnego `import/export` bez błędów
- gotowość do integracji z GitHub Pages i CI/CD

Projekt uruchamiany lokalnie za pomocą:
```bash
npm run dev
```

## 🔍 Etap 7: Testy jednostkowe z `vitest` (Lab 2+3)

Z uwagi na integrację z Vite, zamiast `jest` użyto natywnego frameworka `vitest`.

- Obsługuje nowoczesne moduły ES
- Pełna zgodność z Vite (`vite.config.js`)
- Prosta składnia zgodna z `jest`

Testy walidatora `validateForm()` znajdują się w `src/__tests__/utils.test.js`  
Można je uruchomić poleceniem:
```bash
npm test
```

## Etap 8: Pull Request i Code Review (Lab 2)

W ramach integracji formularza z walidacją, utworzono pull request z branchu `feature/form-validation` do `main`.

**Zakres PR:**
- Integracja formularza z funkcją `validateForm`
- Obsługa błędów na froncie
- Wersja gotowa do budowania i testów

**Review:**
- Przeprowadzono self-review z komentarzami
- Zmiany zostały zaakceptowane i scalone do `main`

**Link do PR:**  
[https://github.com/Bartek20/student-support-form/pull/1](https://github.com/Bartek20/student-support-form/pull/1)

## Etap 9: Rozwiązywanie konfliktów (Lab 2)

W ramach ćwiczeń z rozwiązywania konfliktów, utworzono dwa branche:
- `feature/header-a`: zmiana nagłówka na „Formularz Wsparcia Studenta | WSB Merito”
- `feature/header-b`: zmiana nagłówka na „Formularz Wsparcia Studenta - Uniwersytety Merito”

Po scaleniu `feature/header-a` do `main`, podczas próby scalania `feature/header-b` wystąpił konflikt w pliku `index.html`.

**Rozwiązanie:**
- Konflikt został rozwiązany ręcznie poprzez utworzenie wspólnej wersji nagłówka:
  > „Kontakt i Wsparcie Studenta - Uniwersytety WSB Merito”

**Commit rozwiązujący konflikt:**
[https://github.com/Bartek20/student-support-form/pull/3/commits/caa7d3cfa719c0f228b0343c55f4bc8abf4b9791](https://github.com/Bartek20/student-support-form/pull/3/commits/caa7d3cfa719c0f228b0343c55f4bc8abf4b9791)

## Etap 10: Semantic Versioning (Lab 2)

W projekcie zastosowano wersjonowanie semantyczne (SemVer) z oznaczeniem:

- `0.0.0` – pierwsze wydanie
- `0.0.1` – poprawa testów jednostkowych (PATCH)
- `0.1.0` – dodano pole `files` do formularza (MINOR)

**Zmiany udokumentowano w pliku `CHANGELOG.md`.**

## Etap 11: Rozszerzenie funkcjonalności i workflow (Lab 2)

W ramach ćwiczeń z pełnego workflow:
- utworzono gałąź `feature/styling`
- dodano nowy plik `style.css` zawierający podstawową stylizację formularza
- zamiast `alert()` formularz wyświetla błędy pod każdym polem
- dodano komunikat sukcesu `Formularz został poprawnie przesłany!` widoczny pod formularzem, komunikat pokazuje się tylko po przejściu walidacji
- wcześniej stosowany `alert()` został usunięty na rzecz walidacji w formularzu
- zmiany zostały przesłane jako pull request z opisem zmian
- wykonano self-review i zatwierdzono merge
- utworzono tag `v1.0.0`

## Etap 12: CI/CD i wdrożenie (Lab 3)

Projekt został zintegrowany z systemem CI/CD na GitHubie (Github Actions):

### Testy (CI)
- Skonfigurowano workflow GitHub Actions (`ci.yml`)
- Testy jednostkowe są uruchamiane automatycznie przy każdym pushu i PR do `main`
- Dodano testy jakości kodu z wykorzystaniem ESLint
- Budowanie kodu wykonane w CD
- Budowanie obrazu Docker (nie dotyczy)

### Build
- Projekt budowany za pomocą polecenia `npm run build`
- Wersja produkcyjna trafia do folderu `dist/`

### Deployment (CD)
- Wdrożenie odbywa się poprzez skrypt `gh-pages` (ręcznie)
```bash
npm run deploy
```
- lub poprzez workflow Github Actions (`deploy.yaml`)
- Strona została opublikowana na GitHub Pages:
  [https://bartek20.github.io/student-support-form/](https://bartek20.github.io/student-support-form/)
- Health Check po wdrożeniu (nie dotyczy - brak możliwości przez stosowane przez GH Pages cache)
- Możliwość rollback (nie dotyczy - deploy wykonany jedynie po zaliczeniu testów + brak natywnej możliwości wykonania rollback)

### Konfiguracja środowiska
- Secrets automatycznie skonfigurowany (`GITHUB_TOKEN`)
- Zmienne środowiskowe (nie dotyczy)
- Health endpoint (nie dotyczy)

### Dokumentacja
- Dodano informacje na temat deploymentu
- Dodano informacje na temat zastosowanego workflow
- Konfiguracja środowiska (nie dotyczy - nie wymagana przy GH Actions)

## Etap 13: Zadania dodatkowe (Lab 3)

### Multi-environment deployment
Za multi-environment deployment odpowiada Cloudflare Pages, które przy domyślnych ustawieniach wykonuje `preview` deployment dla każdego commitu dla każdego branchu nie będącego produkcyjnym (`main`).<br>Wszystkie commity są dostępne pod adresem strony z odpowiednim hashem commitu jako subdomena.

### Advanced monitoring
Nie dotyczy - jedyny możliwy monitoring to czy strona jest dostępna, a za to odpowiada GH Pages

### Milti-platform deployment
Dodano deployment do Cloudflare Pages<br>
Projekt jest dostępny tutaj: [https://student-support-form.pages.dev/](https://student-support-form.pages.dev/)

#### Porównanie platform
|                     | **GitHub Pages**           | **Cloudflare Pages**        |
|---------------------|----------------------------|-----------------------------|
| **Łatwość konfiguracji** | Automatyczna integracja, wymagane jedynie przygotowanie workflow / aktywacja z poziomu ustawień | Wymagane połączenie konta Github z Cloudflare i utworzenie projektu lub ręczne wrzucenie gotowych plików |
| **Koszty**              | Całkowicie darmowe (tylko publiczne repo) | Całkowicie darmowe (dla statycznych stron) |
| **Performance**         | Wydajne, ale bez globalnego CDN, cache może opóźnić wdrożenie zmian | Szybki globalny CDN (Edge Network), cache czyszczony po deploymencie |
| **Zarządzanie**         | Zintegrowane z GitHub, proste | Osobny panel, ale wystarczy raz skonfigurować projekt |
