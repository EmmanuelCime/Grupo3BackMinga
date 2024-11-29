import "dotenv/config.js";
import "../../config/database.js";
import Author from "../Author.js";

const arrayAuthors = [
    {
      name: "Masashi",
      lastName: "Kishimoto",
      city: "Nagasaki",
      country: "Japón",
      dateBorn: " ",
      photo: "https://example.com/photos/masashi_kishimoto.jpg",
      user_id: "674a41375514b05d95f451a8",
      active: true
    },
    {
      name: "Eiichiro",
      lastName: "Oda",
      city: "Kumamoto",
      country: "Japón",
      dateBorn: "1975-01-01",
      photo: "https://example.com/photos/eiichiro_oda.jpg",
      user_id: "674a41375514b05d95f451a7",
      active: true
    },
    {
      name: "Hiro",
      lastName: "",
      city: "Nagoya",
      country: "Japón",
      dateBorn: "1977-05-03",
      photo: "https://example.com/photos/hiro_mashima.jpg",
      user_id: "674a41375514b05d95f451a9",
      active: true
    },
    {
      name: "Naoko",
      lastName: "",
      city: "Kochi",
      country: "Japón",
      dateBorn: "",
      photo: "https://example.com/photos/naoko_takeuchi.jpg",
      user_id: "674a41375514b05d95f451aa",
      active: false
    }
]
  
Author.insertMany(arrayAuthors);