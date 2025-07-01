# Student Support Form

Formularz kontaktowy dla studentów Uniwersytetu WSB Merito we Wrocławiu.

## 🎯 Cel projektu

Projekt został stworzony na potrzeby zaliczenia laboratoriów z przedmiotu "Narzędzia do automatyzacji budowy oprogramowania".<br>Jego celem jest zaprezentowanie umiejętności pracy z Git, workflow developerskim oraz automatyzacją CI/CD.

## ⚠️ Ważna informacja

**Strona nie jest oficjalnym kanałem kontaktowym Uniwersytetu WSB Merito we Wrocławiu.**  
Ma charakter edukacyjny i została przygotowana wyłącznie w celach dydaktycznych.

## 📦 Technologie

- Node.js (npm)
- HTML, CSS, JavaScript, Vite
- Git, GitHub, GitHub Actions
- Vitest (testy jednostkowe)
- ESLint (testy jakości kodu)

## 🔁 CI/CD Workflow – Automatyzacja testów i wdrożenia
![CI](https://github.com/Bartek20/student-support-form/actions/workflows/ci.yaml/badge.svg)
![Deploy](https://github.com/Bartek20/student-support-form/actions/workflows/deploy.yaml/badge.svg)

Projekt wykorzystuje **zautomatyzowany proces CI/CD** oparty na GitHub Actions, składający się z dwóch głównych etapów:

---

### ✅ CI – Continuous Integration (`Run CI`)

Workflow `Run CI` uruchamia się automatycznie przy każdym `push` oraz `pull request` na gałęzi `main`.<br>
Odpowiada za:

- **Instalację zależności** (`npm ci`)
- **Wykonanie testów jednostkowych** przy użyciu Vitest
- **Linting kodu źródłowego** przy użyciu ESLint

---

### 🚀 CD – Continuous Deployment (`Deploy to GitHub Pages`)

Workflow `Deploy to GitHub Pages` uruchamia się automatycznie **po pomyślnym zakończeniu testów CI**.<br>
Wykonuje:

- **Budowanie aplikacji** (`npm run build`)
- **Publikację strony na GitHub Pages** z folderu `./dist`

Każda zaakceptowana zmiana w `main`, która przejdzie testy, jest **automatycznie wdrażana na środowisko produkcyjne** hostowane przez GitHub Pages.

## Deployment
Aplikacja jest automatycznie budowana i publikowana po każdej zmianie w głównym branchu (`main`).<br>
Możliwe jest ręczne wykonanie deploymentu poprzez skrypt `gh-pages` jednak nie jest to zalecane, gdyż pomija testy.
```bash
npm install
npm run deploy
```
Nie jest wymagana żadna konfiguracja środowiska Github Pages.

## 📄 Licencja

MIT
