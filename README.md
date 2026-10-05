# Contacts Manager

A React application for managing personal contacts with user authentication, protected routes, persistent sessions and REST API integration.

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
