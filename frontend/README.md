# MERN Google Login Example

This project demonstrates a full-stack MERN (MongoDB, Express, React, Node.js) application with Google OAuth authentication.

## Project Structure

```
backend/
  config/
  controllers/
  models/
  routes/
  utils/
  .env
  index.js
  package.json

frontend/
  public/
  src/
  index.html
  package.json
  vite.config.js
```

## Features

- Google OAuth login using React and Express
- User data stored in MongoDB
- JWT-based authentication
- Protected dashboard route

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file (see `.env` for required variables).
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```

The frontend will be available at [http://localhost:5173](http://localhost:5173) and the backend at [http://localhost:8080](http://localhost:8080).

## License

This project is for educational