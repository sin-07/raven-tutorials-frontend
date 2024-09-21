# Raven Tutorials Client

This project is the client-side application for Raven Tutorials, built using React and Vite. It includes various components and pages, such as the admission form, which interacts with backend resources.

## Table of Contents
- [Installation](#installation)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Development](#development)
- [Build](#build)
- [Linting](#linting)
- [Preview](#preview)
- [Usage](#usage)
- [License](#license)

## Installation
To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <project-directory>
npm install
```

## Scripts
The following scripts are available in the project:

- `dev`: Starts the development server.
- `build`: Builds the project for production.
- `lint`: Runs ESLint to check for linting errors.
- `preview`: Previews the production build.

You can run these scripts using:

```bash
npm run <script-name>
```

## Project Structure
The project structure is as follows:
```
src/
│
├── components/       # Reusable components
├── pages/            # Application pages
├── App.jsx           # Main application component
├── main.jsx          # Entry point
└── index.css         # Global styles (Tailwind CSS)
```

## Dependencies
The project uses the following dependencies:

- `axios`: ^1.7.7
- `framer-motion`: ^11.5.6
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-hot-toast`: ^2.4.1
- `react-icons`: ^5.3.0
- `react-router-dom`: ^6.26.2

## Development
To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server and open the application in your default browser.

## Build
To build the project for production, run:

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

## Linting
To check for linting errors, run:

```bash
npm run lint
```

This will run ESLint and display any linting errors or warnings.

## Preview
To preview the production build, run:

```bash
npm run preview
```

This will start a local server to preview the production build.

## Usage
The application includes various components and pages. The main entry point is `src/main.jsx`, which renders the `App` component. The `App` component sets up the routing for the application using `react-router-dom`.

### Admission Form Page
The admission form page (`AdmForm.jsx`) interacts with backend resources. Ensure that the backend server is running and accessible. Update the API endpoints in the `AdmForm` component as needed.

### Tailwind CSS
The project uses Tailwind CSS for styling. The configuration is set up in `tailwind.config.js`, and the styles are imported in `src/index.css`.
