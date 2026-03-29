# TheRideWise.in - Road Complaint Management System

A full-stack web application for managing road complaints, allowing users to submit complaints with images, and officers to respond with resolutions and images. The system includes user authentication, role-based access (users and officers), and cloud-based image storage.

## Technologies, Languages, Libraries, Frameworks, and Modules Used

### Languages
- **JavaScript**: The primary programming language used for both frontend and backend development. All code is written in JavaScript (ES6+ syntax).

### Frameworks
- **React** (v19.1.0): A JavaScript library for building user interfaces, used for the frontend client-side application.
- **Express.js** (v5.1.0): A minimal and flexible Node.js web application framework used for building the backend API server.
- **Vite** (v6.3.5): A fast build tool and development server for modern web projects, used for the React frontend.

### Libraries and Modules
#### Frontend (Client-Side) Libraries
- **Axios** (v1.9.0): A promise-based HTTP client for making API requests to the backend.
- **Firebase** (v11.9.1): Used for authentication, real-time database, or other Firebase services (likely for user management or notifications).
- **Framer Motion** (v12.18.1): A library for creating smooth animations and transitions in React components.
- **GSAP** (GreenSock Animation Platform, v3.13.0) and **@gsap/react** (v2.1.2): Libraries for advanced animations and interactions.
- **Lucide React** (v0.517.0): A library providing customizable icons for React.
- **React DOM** (v19.1.0): The React library for DOM rendering.
- **React Hot Toast** (v2.5.2): A library for displaying toast notifications in React.
- **React Icons** (v5.5.0): A collection of popular icons as React components.
- **React Router DOM** (v7.6.2): A library for routing and navigation in React applications.
- **Tailwind CSS** (v4.1.8) and **@tailwindcss/vite** (v4.1.8): A utility-first CSS framework for styling, integrated with Vite.
- **@vercel/analytics** (v1.5.0): A library for analytics tracking, likely for deployment on Vercel.

#### Backend (Server-Side) Libraries
- **Axios** (v1.9.0): Used for making HTTP requests, possibly for external APIs or internal services.
- **Cloudinary** (v1.41.3) and **Multer Storage Cloudinary** (v4.0.0): Libraries for image upload and management via Cloudinary cloud service.
- **CORS** (v2.8.5): Middleware for enabling Cross-Origin Resource Sharing in Express.
- **Dotenv** (v16.5.0): A module for loading environment variables from a `.env` file.
- **JSON Web Token (JWT)** (v9.0.2): A library for creating and verifying JSON Web Tokens for authentication.
- **Mongoose** (v8.15.1): An ODM (Object Data Modeling) library for MongoDB, used to interact with the database.
- **Multer** (v2.0.0): Middleware for handling multipart/form-data, primarily for file uploads.
- **Nodemon** (v3.1.10): A development tool that automatically restarts the server on file changes.

#### Development and Build Tools
- **ESLint** (v9.25.0) and related plugins (e.g., `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`): For linting and code quality checks in the frontend.
- **@vitejs/plugin-react** (v4.4.1): Vite plugin for React support.
- **@types/react** and **@types/react-dom** (v19.1.2): TypeScript type definitions for React (even though the project uses JavaScript, these may be included for IDE support or future migration).

### Databases and Storage
- **MongoDB**: A NoSQL database used for storing application data (e.g., users, complaints, responses). Interfaced via Mongoose.
- **Cloudinary**: A cloud-based service for image storage and management, integrated for handling complaint images and response images.

### Other Technologies and Tools
- **Authentication**: JWT-based authentication with role-based access control (e.g., user and officer roles).
- **File Uploads**: Handled via Multer and Cloudinary for images associated with complaints and responses.
- **Routing**: Client-side routing with React Router DOM; server-side API routing with Express.
- **Styling**: Utility-based styling with Tailwind CSS, enhanced with animations from Framer Motion and GSAP.
- **Deployment**: Configured for Vercel (via `vercel.json` in client), with analytics integration.
- **Version Control**: Git (based on `.gitignore` files in both client and server directories).
- **Environment Management**: Uses `.env` files for configuration (e.g., database URLs, API keys).

### Project Structure
- **Client (Frontend)**: A React application built with Vite, featuring components for user interfaces (e.g., login, dashboard, complaint forms), pages for different views, and assets for images and logos.
- **Server (Backend)**: An Express.js API server with routes for authentication, complaints, responses, and uploads; models for data schemas (e.g., User, Complaint, ComplaintResponse); middleware for authentication; and configuration for database and cloud storage.
- **Overall Architecture**: Full-stack MERN-like stack (MongoDB, Express, React, Node.js), with additional integrations for cloud storage, animations, and analytics.

## Installation and Setup

### Prerequisites
- Node.js (version 18 or higher)
- MongoDB (local or cloud instance)
- Cloudinary account for image storage

### Backend Setup
1. Navigate to the server directory:
   ```
   cd server
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the server directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```
4. Start the server:
   ```
   npm run dev
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```
   cd client
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

The application will be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend API.

## Features
- User registration and login
- Role-based access (User and Officer)
- Complaint submission with image uploads
- Officer dashboard for viewing and responding to complaints
- Response submission with images
- Protected routes
- Responsive UI with Tailwind CSS
- Animations with Framer Motion and GSAP

## API Endpoints
- `/api/auth` - Authentication routes
- `/api/complaints` - Complaint management
- `/api/responses` - Response management
- `/api/upload` - File upload routes

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License
This project is licensed under the ISC License.
