# Copilot Instructions for RateMyLife

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a React TypeScript single-page application for daily wellness tracking with the following specifications:

### Technology Stack
- **Frontend**: React 18 with TypeScript and Vite
- **Authentication**: Azure AD B2C with Microsoft Account support
- **UI Framework**: Material-UI (MUI) v5
- **Charts**: Chart.js with react-chartjs-2
- **Hosting**: Azure Static Web Apps (free tier)
- **Backend**: Azure Functions (API)
- **Database**: Azure Cosmos DB (free tier)

### Key Features
- Daily wellness ratings (1-6 scale)
- Microsoft Account authentication (hotmail.com, outlook.com, live.com)
- Data visualization with charts
- Historical trend analysis
- Responsive design for mobile and desktop

### Code Style Guidelines
- Use TypeScript strict mode
- Follow React functional components with hooks
- Use Material-UI components consistently
- Implement proper error handling and loading states
- Use meaningful component and variable names in English
- Comment complex business logic

### Authentication Requirements
- Support Microsoft personal accounts (hotmail.com, outlook.com, etc.)
- Secure token handling
- Automatic token refresh
- Proper logout functionality

### Data Structure
- Daily ratings stored with timestamp
- User-specific data isolation
- Questions configurable (e.g., "Rate your migraine today from 1-6")
- Support for multiple wellness categories

### Azure Integration
- Static Web Apps configuration
- Functions API for data operations
- Cosmos DB integration
- Proper CORS setup
