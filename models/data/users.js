import "dotenv/config.js";
import "../../config/database.js";
import User from "../User.js";

const arrayUsers = [
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

User.insertMany(arrayUsers);
