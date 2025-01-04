# Journal Web Application

A modern web-based journaling platform built with the MERN stack that enables users to create, manage, and store their personal journals securely. Features user authentication and a clean, intuitive interface for writing and organizing journal entries.

## Features

- 🔐 Secure user authentication with JWT and Google OAuth
- 📝 Create and manage personal journal entries
- 👤 User profile management
- 🔒 Encrypted password storage
- 🎨 Clean and responsive user interface
- 🔄 Real-time updates

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn


### Project Structure

├── backend/ \
│   ├── controllers/\
│   ├── models/\
│   ├── routes/\
│   ├── services/\
│   ├── server.js\
│   └── package.json\
└── frontend/\
│   ├── src/\
│   ├── public/\
│   ├── index.html\
│   ├── package.json


### Backend
```bash
cd backend
npm run start:dev # For development with nodemon
or
npm start # For production
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```
## API Reference

### User Endpoints

#### `POST /v1/users/v1/createUserFromForm`
Creates a new user account.

Request body:

json
{
"name": "string",
"email": "string",
"password": "string"
}

#### `GET /v1/users/`
Returns user information.

### Journal Endpoints
(Documentation in progress)

## Tech Stack

- **Frontend**: React.js, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, Google OAuth
- **Other Tools**: CORS, dotenv, body-parser

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

Aman Kumar Singh

## License

This project is licensed under the ISC License.

## Acknowledgments

- MongoDB for database
- Express.js for backend framework
- React for frontend framework
- Node.js for runtime environment