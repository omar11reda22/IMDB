# IMDB Simulation - Node.js Project

## 📌 Project Overview
This project is a simulation of the IMDB platform, built using Node.js and Express. It allows users to browse, review, and rate movies. The system supports user authentication, watchlists, and review management.

## 🚀 Features
- User authentication (signup/login)
- Browse movie listings
- Add, edit, and delete movie reviews
- Rate movies
- Create and manage watchlists
- RESTful API structure

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT (JSON Web Token)
- **Other:** Express Validator, bcrypt.js

## 📂 Project Structure
```
📁 imdb-simulation
│-- 📂 models       # Database models
│-- 📂 routes       # API routes
│-- 📂 controllers  # Business logic
│-- 📂 services     # Service layer for handling DB logic
│-- 📂 middleware   # Custom middleware (authentication, validation)
│-- 📄 server.js    # Main server file
│-- 📄 package.json # Dependencies and scripts
```

## 🛠️ Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/imdb-simulation.git
   cd imdb-simulation
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file and add your MongoDB connection string and JWT secret:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. **Run the server:**
   ```sh
   npm start
   ```

## 📌 API Endpoints
| Method | Route                  | Description             |
|--------|------------------------|-------------------------|
| GET    | `/movies`              | Get all movies         |
| POST   | `/movies`              | Add a new movie        |
| GET    | `/movies/:id`          | Get a movie by ID      |
| DELETE | `/movies/:id`          | Delete a movie        |
| POST   | `/reviews`             | Add a review          |
| GET    | `/reviews/:movieId`    | Get reviews for movie |

## 🤝 Contributing
Pull requests are welcome! If you’d like to contribute, follow these steps:
1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to your fork (`git push origin feature-branch`)
5. Open a Pull Request

## 📜 License
This project is licensed under the MIT License.

---
🔗 **Author:** Your Name  
📧 **Contact:** your.email@example.com

