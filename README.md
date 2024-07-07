# SPECTRA Challenge

SPECTRA Challenge is a React-based web application that showcases popular TV shows and movies. It features a carousel for featured content and a grid layout for popular shows.

## Features

- Dynamic carousel for featured content
- Grid layout for popular shows
- Responsive design for various screen sizes
- Integration with React Router for navigation
- CI/CD pipeline using GitHub Actions and Vercel

## Prerequisites

Before you begin, ensure you have the following prerequisites in place:

- Node.js 18.x or later
- npm 6.x or later
- Git 2.x or later

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/yschristian/SPECTRA-challenge.git
   ```

2. Navigate to the project directory:

   ```
   cd SPECTRA-challenge
   ```

3. Install the project dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

   The application should now be running on [http://localhost:5173](http://localhost:5173) (or another port if 5173 is in use).

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Runs the linter to check for code style issues.
- `npm test`: Runs the test suite.

## Running Tests

To run the automated tests for this system, use the following command:

```
npm test
```

## Deployment

This project is set up to deploy automatically to Vercel when changes are pushed to the main branch. The CI/CD pipeline will run tests, build the project, and deploy if all steps are successful.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [React Router](https://reactrouter.com/) - For navigation
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - For testing


## Authors

- **Christian YUBAHWE SHEMA** - _Initial work_ - [yschristian](https://github.com/yschristian)
