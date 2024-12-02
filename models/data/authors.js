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
      photo: "https://gcomics.online/wp-content/uploads/2018/01/masashi-kishimoto-podcast.jpg",
      userId: "674c271fad96a23f78c26c5b",
      active: true
    },
    {
      name: "Eiichiro",
      lastName: "Oda",
      city: "Kumamoto",
      country: "Japón",
      dateBorn: "1975-01-01",
      photo: "https://www.anmosugoi.com/wp-content/uploads/2024/03/One-Piece-Eiichiro-Oda.webp",
      userId: "674c271fad96a23f78c26c5c",
      active: true
    },
    {
      name: "Hiro",
      lastName: "",
      city: "Nagoya",
      country: "Japón",
      dateBorn: "1977-05-03",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpv-8HYFTgudX00G00CGIfYk9W7H76pNnJhQ&s",
      userId: "674c271fad96a23f78c26c5d",
      active: true
    },
    {
      name: "Naoko",
      lastName: "",
      city: "Kochi",
      country: "Japón",
      dateBorn: "",
      photo: "https://revistaparati.mx/wp-content/uploads/2024/03/copia-de-tumblr_oipr8xsw3k1twabfio1_1280.jpg?w=695",
      userId: "674c271fad96a23f78c26c5e",
      active: false
    }
]
  
Author.insertMany(arrayAuthors);