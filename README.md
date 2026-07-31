# 🦷 Dental Clinic Management System

A modern full-stack MERN application designed to streamline dental clinic operations. The platform enables patients to book appointments online, dentists to manage schedules, and administrators to oversee clinic activities through a secure dashboard.

## 🚀 Features

### 👨‍⚕️ Patient Features

* Patient registration and login
* Browse available dentists 
* Book appointments online
* View appointment history 
* Update profile information
* Receive appointment status updates

### 🦷 Dentist Features

* Secure dentist dashboard
* Manage appointments
* View patient information
* Update treatment records
* Schedule management

### 🔐 Admin Features

* Manage patients and dentists
* Approve or reject appointments
* Dashboard analytics
* Monitor clinic activities
* Role-based access control

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Tailwind CSS
* Context API

### Backend

* Node.js
* Express.js
* JWT Authentication
* Bcrypt.js

### Database

* MongoDB
* Mongoose

## 📂 Project Structure

```bash
dental-clinic/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/dental-clinic.git
cd dental-clinic
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run Backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

## 🔑 Environment Variables

```env
PORT=
MONGO_URI=
JWT_SECRET=
```

## 📸 Screenshots

* Landing Page
* Patient Dashboard
* Dentist Dashboard
* Admin Dashboard
* Appointment Booking Page

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile
```

### Appointments

```http
GET    /api/appointments
POST   /api/appointments
PUT    /api/appointments/:id
DELETE /api/appointments/:id
```

### Dentists

```http
GET    /api/dentists
POST   /api/dentists
PUT    /api/dentists/:id
DELETE /api/dentists/:id
```

## Future Enhancements

* Online payments
* Email notifications
* SMS reminders
* Prescription management
* Medical report uploads
* Video consultation
* AI-powered appointment suggestions

## Contributing

Contributions are welcome. Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License.

## Author

**Dagne**
Software Engineering Student | Full-Stack Developer
