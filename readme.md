# Pro Setup Express

## Overview

Introduction
Pro Setup Express is an API server developed using Node.js and Express, designed to manage product and category data efficiently. With a focus on security and usability, this server implements role-based access control, ensuring that only authorized administrators can create, read, update, and delete products and categories. Regular users can browse and purchase products seamlessly. The project employs modern best practices, including JWT for secure authentication and a structured API design, making it an ideal solution for e-commerce applications.

## Table of Contents

- [Features](#features)
- [Live URL](#live-url)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)


## Features

- Role-based access control for admin and user roles
- CRUD operations for products and categories (admin only)
- User ability to view and purchase products
- Secure authentication using JSON Web Tokens (JWT)
- Detailed error handling and HTTP status codes
- Environment variable management with dotenv

## Live URL

[Live Demo](https://your-live-url.com)


## Installation

1. **Clone the repository:**
   git clone https://github.com/Billal990/sport-facility-booking-platform.git

2. **Install dependencies:**
   cd sport-facility-booking-system <br>
   npm install

3. **Set up environment variables:**
   Create a .env file in the root directory and define the following variables:
   PORT=3000 <br>
   MONGODB_URI=`<Your MongoDB connection URI>`

4. **Run the application:**
   npm start
   The application should now be running on http://localhost:3000.

## API Endpoints

### Admin Routes

- **Create Product**: `POST /api/products`
- **Get All Products**: `GET /api/products`
- **Update Product**: `PUT /api/products/:id`
- **Delete Product**: `DELETE /api/products/:id`
- **Create Category**: `POST /api/categories`
- **Get All Categories**: `GET /api/categories`
- **Update Category**: `PUT /api/categories/:id`
- **Delete Category**: `DELETE /api/categories/:id`

### User Routes

- **View Products**: `GET /api/products`
- **View Categories**: `GET /api/categories`
- **Purchase Product**: `POST /api/purchase`

### Authentication

- **Login**: `POST /api/auth/login`
- **Register**: `POST /api/auth/register`

## Technologies Used

- Node.js
- Express
- MongoDB (via Mongoose)
- TypeScript
- JWT for authentication
- ESLint and Prettier for code quality

## Scripts

- `npm run start:dev`: Start the server in development mode
- `npm run start:prod`: Start the server in production mode
- `npm run build`: Build the TypeScript files
- `npm run lint`: Lint the code
- `npm run lint:fix`: Fix linting issues
- `npm run prettier`: Format the code with Prettier


## Usage

- Ensure MongoDB is running and accessible.
- Use API testing tools like Postman or curl to interact with the API endpoints.
- Authenticate admin and user requests with JSON Web Tokens (JWTs) included in the Authorization header
