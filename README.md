# Laravel 11 with React Frontend

This is a basic Laravel 11 project with React frontend components integration. The project demonstrates how to set up Laravel with React and create a modern web application.

## Features

- Laravel 11 backend structure
- React 18 with TypeScript frontend
- React Router for navigation
- Sample components (Navbar, Home, About)
- Mock API integration (with code for real Laravel API)
- CSS styling
- Vite for frontend build process

## Project Structure

```
laravel-react-app/
├── app/            # Laravel application code
├── config/         # Laravel configuration files
├── database/       # Laravel database migrations and seeds
├── public/         # Public assets and built React files
├── resources/      # Frontend source files
│   ├── css/        # CSS files
│   └── js/         # React components and app logic
├── routes/         # Laravel API and web routes
└── ...
```

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   bun install
   ```
3. Start the development server:
   ```
   bun run dev
   ```
4. Visit `http://localhost:5173` in your browser

## Development

### Frontend (React)

The React components are located in the `resources/js/components` directory. The main entry point is `resources/js/app.tsx`.

### Backend (Laravel)

The Laravel backend structure is set up with basic configuration files. In a full implementation, you would add controllers, models, migrations, and other Laravel components as needed.

## Building for Production

To build the application for production:

```
bun run build
```

This will create optimized production files in the `public/build` directory.

## Extending the Project

### Adding New Components

1. Create a new component file in `resources/js/components/`
2. Add routes in `resources/js/app.tsx` if needed
3. Import and use the component as needed

### Connecting to Laravel API

The Home component includes commented code for making API calls to a Laravel backend. Uncomment and modify as needed to connect to your actual API endpoints.

## License

MIT
