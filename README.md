# Contacts Manager

A React application for managing personal contacts with user authentication, protected routes, persistent sessions and REST API integration.

## Live Demo

[View the live application](https://erenay-contacts-manager.vercel.app/)

## Features

- User registration and login
- Persistent authentication
- Protected and restricted routes
- Add new contacts
- Delete contacts
- Search and filter contacts
- REST API integration with Axios
- Redux-based state management
- Loading and error state handling
- Form handling with Formik

## Tech Stack

- React
- JavaScript
- Redux Toolkit
- React Redux
- Redux Persist
- React Router
- Axios
- Formik
- Vite

## Application Structure

The application separates authentication, contacts and filtering logic into dedicated Redux slices.

Authentication state is persisted locally, allowing users to remain signed in after refreshing the page.

Private and restricted routes control access to authenticated and public pages.

## API Configuration

The application communicates with a REST API using Axios.

Create a `.env` file in the project root:

```env
VITE_API_URL=your_api_url

```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/ErenaySener/contacts-manager.git
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root and add:

```env
VITE_API_URL=your_api_url
```

Start the development server:

```bash
npm run dev
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Author

**Erenay Sener**

GitHub: [ErenaySener](https://github.com/ErenaySener)
