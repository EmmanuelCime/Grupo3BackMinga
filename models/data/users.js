import "dotenv/config.js";
import "../../config/database.js";
import User from "../User.js";

const arrayUsers = [
<<<<<<< HEAD
    {
      name: "John Doe",
      password: "password123",
      photo: "https://example.com/photo1.jpg",
      role: 0,
      online: false
    },
    {
      name: "Jane Smith",
      password: "password456",
      photo: "https://example.com/photo2.jpg",
      role: 0,
      online: false
    },
    {
      name: "Alice Brown",
      password: "password789",
      photo: "https://example.com/photo3.jpg",
      role: 0,
      online: false
    },
    {
      name: "Bob Johnson",
      password: "password012",
      photo: "https://example.com/photo4.jpg",
      role: 0,
      online: false
    },
    {
      name: "Charlie Lee",
      password: "password345",
      photo: "https://example.com/photo5.jpg",
      role: 0,
      online: false
    },
    {
      name: "David Wilson",
      password: "password678",
      photo: "https://example.com/photo6.jpg",
      role: 0,
      online: false
    },
    {
      name: "Eva Martin",
      password: "password910",
      photo: "https://example.com/photo7.jpg",
      role: 0,
      online: false
    },
    {
      name: "Frank Clark",
      password: "password111",
      photo: "https://example.com/photo8.jpg",
      role: 0,
      online: false
    },
    {
      name: "Grace Walker",
      password: "password222",
      photo: "https://example.com/photo9.jpg",
      role: 0,
      online: false
    },
    {
      name: "Harry White",
      password: "password333",
      photo: "https://example.com/photo10.jpg",
      role: 0,
      online: false
    }
]
=======
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
>>>>>>> c7f291e5a5ffe8cef65a1ac948d43f9c627e3710

User.insertMany(arrayUsers);
