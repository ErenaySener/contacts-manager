# Contacts Manager

A React application for managing personal contacts with user authentication, protected routes, persistent sessions, and API integration.

## Features

- User registration and login
- Persistent authentication
- Protected routes for authenticated users
- Add new contacts
- Delete contacts
- Search and filter contacts
- Contact data fetched from a REST API
- Responsive application structure
- Loading and error state handling

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

The application separates authentication, contacts, and filtering logic into dedicated Redux slices.

Authentication state is persisted locally so users can stay signed in after refreshing the page.

Private and restricted routes are used to control access to authentication and contact pages.

## API

The application communicates with a REST API using Axios.

The API URL is configured through an environment variable:

```env
VITE_API_URL=your_api_url
