# RateMyLife - Daglig Velvære Tracker

En moderne React TypeScript single-page applikasjon for å spore daglig velvære med Microsoft-autentisering og Azure hosting.

## 🌟 Funksjoner

- **Microsoft Autentisering**: Sikker pålogging med Microsoft-kontoer (hotmail.com, outlook.com, live.com)
- **Daglig Registrering**: Ranger migræne, humør, energi, søvn og stress på en skala fra 1-6
- **Visuell Tracking**: Se trender og mønstre over tid med interaktive grafer
- **Responsiv Design**: Fungerer perfekt på både desktop og mobil
- **Azure Hosting**: Hostet gratis på Azure Static Web Apps

## 🚀 Teknologi Stack

- **Frontend**: React 18 med TypeScript og Vite
- **UI Framework**: Material-UI (MUI) v5
- **Autentisering**: Azure AD B2C med MSAL
- **Grafer**: Chart.js med react-chartjs-2
- **Hosting**: Azure Static Web Apps (gratis tier)
- **Database**: Azure Cosmos DB (gratis tier)

## 🛠️ Utvikling

### Forutsetninger
- Node.js 18+ 
- npm eller yarn

### Installasjon

```bash
# Klone repositoryet
git clone https://github.com/ditt-brukernavn/ratemylife.git
cd ratemylife

# Installer avhengigheter
npm install

# Kopier miljøvariabler
cp .env.example .env

# Start utviklingsserver
npm run dev
```

### Miljøvariabler

Opprett en `.env` fil og legg til dine Azure AD B2C-konfigurasjoner:

```env
REACT_APP_AZURE_CLIENT_ID=din-client-id
REACT_APP_AZURE_AUTHORITY=https://login.microsoftonline.com/common
REACT_APP_REDIRECT_URI=http://localhost:5173
REACT_APP_POST_LOGOUT_REDIRECT_URI=http://localhost:5173
```

## 🔧 Azure-oppsett

### 1. Azure AD B2C-konfigurering
1. Opprett en Azure AD B2C-tenant
2. Registrer en ny applikasjon
3. Konfigurer redirect URIs
4. Oppdater miljøvariabler

### 2. Azure Static Web Apps
1. Opprett en ny Static Web App i Azure Portal
2. Koble til GitHub-repositoryet
3. Konfigurer build-innstillinger

### 3. Azure Functions (API)
1. Opprett en Function App
2. Konfigurer CORS for Static Web App
3. Deploy API-endepunkter

## 📊 Datastruktur

Daglige registreringer lagres med følgende struktur:

```typescript
interface DailyRating {
  date: string; // YYYY-MM-DD
  userId: string;
  ratings: {
    migraine: number; // 1-6
    mood: number;     // 1-6
    energy: number;   // 1-6
    sleep: number;    // 1-6
    stress: number;   // 1-6
  };
}
```

## 🚀 Deployment

Applikasjonen deployes automatisk til Azure Static Web Apps når kode pushes til main branch.

## 🤝 Bidrag

1. Fork repositoryet
2. Opprett en feature branch
3. Commit endringene dine
4. Push til branchen
5. Opprett en Pull Request

## 📄 Lisens

Dette prosjektet er lisensiert under MIT License.

## 🆘 Support

Hvis du har spørsmål eller problemer, vennligst opprett en issue i GitHub-repositoryet.
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
