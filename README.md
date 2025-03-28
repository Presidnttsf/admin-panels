#  Admin Panel (React + Vite) Tauseef Akhtar

This project is an **Admin Panel** built using **React 19** and **Vite**, utilizing **React Bootstrap** for UI components and **React Router DOM** for navigation. The application integrates **Axios** for API calls and follows a structured folder architecture for maintainability.

## Features

- **React 19 + Vite** for fast and optimized development
- **React Bootstrap** for responsive and clean UI
- **Axios** for API requests
- **React Hook Form** for form handling
- **CRUD operations** for managing models
- **Loading states** with React Bootstrap Spinner
- **Search functionality** for filtering models
- **Dropdown actions** using React Icons

## Technologies Used

- **React 19** - Frontend framework
- **Vite** - Fast build tool for modern web projects
- **React Bootstrap** - UI components for styling
- **React Router DOM** - Client-side navigation
- **Axios** - HTTP client for API interactions
- **React Hook Form** - Form management
- **ESLint** - Code linting for better code quality

## Installation

### 1. Clone the Repository

```sh
git clone https://github.com/your-repo/admin-panel.git
cd admin-panel
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Start the Development Server

```sh
npm run dev
```

This will start the Vite development server.

### 4. Build for Production

```sh
npm run build
```

This will generate an optimized build.

## Folder Structure

```
admin-panel/
│── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Application pages
│   ├── services/      # API service files
│   ├── hooks/         # Custom hooks
│   ├── styles/        # CSS and Bootstrap overrides
│   ├── App.js         # Root component
│   ├── main.jsx       # Main entry point
│
│── public/            # Static assets
│── package.json       # Project metadata & dependencies
│── vite.config.js     # Vite configuration
│── .eslintrc.js       # ESLint configuration
```

## API Endpoints

The application interacts with an external API for managing models.

- **Fetch Models:** `GET /api/v1/admin/Model/allModel`
- **Update Model:** `PUT /api/v1/admin/Model/updateModel/:id`
- **Delete Model:** `DELETE /api/v1/admin/Model/deleteModel/:id`

## Future Enhancements

- **Authentication & Authorization**
- **Pagination & Filtering**
- **Dark Mode Support**

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License

