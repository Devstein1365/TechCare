# TechCare - Healthcare Dashboard

A modern, responsive healthcare dashboard built with React, Tailwind CSS, and Chart.js. This project converts an Adobe XD template to a fully functional web application with API integration.

## 🌟 Features

- **Patient Management**: Display and manage patient information
- **Diagnosis History**: Interactive blood pressure charts with Chart.js
- **Diagnostic List**: Table view of patient diagnoses
- **Lab Results**: Download-ready laboratory test results
- **Responsive Design**: Adapts to various screen sizes
- **API Integration**: Secure Basic Auth authentication with Coalition Technologies API

## 🛠️ Technologies Used

- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Chart.js & react-chartjs-2** - Interactive charts
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server
- **Manrope Font** - Professional typography

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository or extract the ZIP file:

```bash
cd TechCare
```

2. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
TechCare/
├── src/
│   ├── assets/              # Optimized images (5 essential files only)
│   ├── components/          # React components
│   │   ├── UI/             # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   └── PatientsList.jsx
│   │   ├── DiagnosisHistory.jsx
│   │   ├── DiagnosticList.jsx
│   │   ├── PatientProfile.jsx
│   │   └── LabResults.jsx
│   ├── pages/              # Page components
│   │   └── Home.jsx
│   ├── services/           # API and external services
│   │   └── api.js
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets (cleaned)
├── index.html             # HTML template
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🔐 API Integration

The application uses Basic Authentication to securely connect to the Coalition Technologies Patient Data API.

**Key Features:**

- Credentials are encoded on the client-side using `btoa()` (not hardcoded in plaintext)
- Dynamic data fetching for all patients in the sidebar
- Only displays Jessica Taylor's detailed information (as per requirements)
- Comprehensive error handling and loading states
- Real-time data - no hardcoded patient information

**API Endpoint:**

```
GET https://fedskillstest.coalitiontechnologies.workers.dev
```

**Data Flow:**

1. `PatientsList` component fetches all patients from API
2. `Home` page fetches Jessica Taylor's complete data
3. All components receive data via props (no static data)

## 🎨 Color Scheme

The design follows the Adobe XD template color palette:

- **Primary**: `#01F0FF` (Cyan)
- **Text Dark**: `#072635` (Navy)
- **Text Light**: `#707070` (Gray)
- **Background**: `#F6F7F8` (Light Gray)
- **Chart Colors**:
  - Systolic: `#E66FD2` (Pink)
  - Diastolic: `#8C6FE6` (Purple)
- **Card Backgrounds**:
  - Respiratory: `#E0F3FA` (Light Blue)
  - Temperature: `#FFE6E9` (Light Pink)
  - Heart Rate: `#FFE6F1` (Light Rose)

## 📊 Components Overview

### Navbar

- Logo and navigation menu
- Active state for current page
- Doctor profile section with settings

### PatientsList

- Dynamically fetches all patients from API
- Scrollable list with custom styling
- Auto-highlights Jessica Taylor
- Search functionality (UI only)

### DiagnosisHistory

- Interactive line chart showing blood pressure trends
- Last 6 months of data from API
- Systolic (pink) and Diastolic (purple) readings
- Horizontal grid lines matching design specifications
- Vital signs cards with real-time data (Respiratory Rate, Temperature, Heart Rate)

### PatientProfile

- Patient photo and basic information
- Date of birth, gender, contact details
- Emergency contact and insurance provider
- "Show All Information" action button

### DiagnosticList

- Table format displaying diagnoses
- Problem/Diagnosis, Description, and Status columns

### LabResults

- List of available lab reports
- Download functionality for each result

## 🌐 Responsive Design

The application is fully responsive and optimized for:

- Desktop (1920px+)
- Laptop (1400px - 1919px)
- Tablet (768px - 1399px)
- Mobile (320px - 767px)

## 📝 Best Practices Implemented

1. **Component Structure**: Modular, reusable components with clear separation of concerns
2. **State Management**: React hooks (useState, useEffect) for data fetching and state
3. **Code Organization**: Clear folder structure with well-commented code
4. **Error Handling**: Try-catch blocks and user-friendly error messages
5. **Loading States**: Smooth loading indicators for better UX
6. **Security**: Client-side credential encoding (not hardcoded in plaintext)
7. **Accessibility**: Semantic HTML and ARIA labels where appropriate
8. **Performance**: Optimized assets (only 5 essential images), clean bundle
9. **Code Quality**: Natural, helpful comments explaining logic and decisions
10. **Data Flow**: All components use API data via props - zero hardcoded data

## ⚠️ Important Notes

- **Focus**: Only Jessica Taylor's detailed data is displayed in the main dashboard (as per requirements)
- **Static UI Elements**: Search, dropdown, and ellipsis buttons are UI-only (no interaction logic implemented)
- **Data Matching**: Some API data doesn't match the design exactly (this is expected from the provided API)
- **Asset Optimization**: Unused files removed - only 5 essential images remain in the project
- **Real-time Data**: All patient information, charts, and stats come directly from the API

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**

```bash
# Kill the process using port 5173
npx kill-port 5173
# Then restart the dev server
npm run dev
```

**Module not found:**

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**

```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## 📄 License

This project is created as part of a skills assessment for Coalition Technologies.

## 👨‍💻 Development

- Follow the coding style present in the existing files
- Keep components small and focused
- Write self-documenting code with clear variable names
- Test responsiveness at different screen sizes

## 🔄 Future Enhancements

Potential features for future versions:

- Patient search functionality
- Multiple patient view
- Interactive diagnostic list
- Real-time data updates
- User authentication system
- Dark mode support
- Print-friendly layouts

---

**Built with ❤️ using React and Tailwind CSS**
