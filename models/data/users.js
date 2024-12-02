import "dotenv/config.js";
import "../../config/database.js";
import User from "../User.js";
const arrayUsers = [
  {
    email: "juan.perez@example.com",
    password: "123456",
    photo: "https://www.example.com/photos/juan.jpg",
    role: 0, 
    online: false
  },
  {
    email: "maria.garcia@example.com",
    password: "password123",
    photo: "https://www.example.com/photos/maria.jpg",
    role: 0, 
    online: false
  },
  {
    email: "carlos.martin@example.com",
    password: "carlo$2024",
    photo: "https://www.example.com/photos/carlos.jpg",
    role: 0, 
    online: false
  },
  {
    email: "luisa.lopez@example.com",
    password: "luisaPass88",
    photo: "https://www.example.com/photos/luisa.jpg",
    role: 0, 
    online: false
  },
  {
    email: "pedro.rodriguez@example.com",
    password: "pedro987",
    photo: "https://www.example.com/photos/pedro.jpg",
    role: 0, 
    online: false
  }
];

  User.insertMany(arrayUsers);
