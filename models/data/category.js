import "dotenv/config.js"
import "../../config/database.js"
import Category from "../Category.js"
import "../User.js"
<<<<<<< HEAD
=======

>>>>>>> c7f291e5a5ffe8cef65a1ac948d43f9c627e3710
const categories = [
    {
      name: "Shōnen",
      color: "#FFE0DF",
      hover: "#EF8481",
      coverPhoto: "https://carolinianuncg.com/wp-content/uploads/2023/09/manga-.png",
      charcterPhoto: "https://www.pimsleur.com/blog/app/uploads/2020/06/shonen-jump-japan.jpg",
      description: "Shōnen is primarily aimed at young male audiences. It often focuses on action, adventure, and character development, with themes of friendship and personal growth.",
      adminId: null
    },
    {
      name: "Seinen",
      color: "#FC9C57",
      hover: "#FFDFC8",
      coverPhoto: "https://sugoii-japan.com/wp-content/uploads/2023/09/Best-Seinen-Mangas.jpg",
      charcterPhoto: "https://www.lavanguardia.com/andro4all/hero/2021/03/One-Punch-Man-es-uno-de-los-grandes-animes-de-este-siglo.jpg?width=768&aspect_ratio=16:9&format=nowebp",
      description: "Seinen is targeted at adult men. It often features more complex and mature plots, with themes that may include politics, society, and psychology.",
      adminId: null
    },
    {
      name: "Shōjo",
      color: "#D1FBF0",
      hover: "#00BA88",
      coverPhoto: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/01/Shojo-Header.jpg",
      charcterPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGywMSlhN_uVXQ8E1rhN8tWbWS0YrriJ6nA&s",
      description: "Shōjo is primarily aimed at young female audiences. The stories often focus on romance, emotions, and interpersonal relationships.",
      adminId: null
    },
    {
      name: "Comics",
      color: "#E0DBFF",
      hover: "#8883F0",
      coverPhoto: "https://sm.ign.com/t/ign_es/screenshot/default/blob_n6vk.1280.jpgg",
      charcterPhoto: "https://images.cdn3.buscalibre.com/fit-in/360x360/6f/4b/6f4bc709e6cb7cdc942d3e26a2d39bb7.jpg",
      description: "Comic books are a storytelling medium that combines visual art with text in sequential panels. They cover various genres like superheroes, fantasy, and sci-fi. Comics offer a unique, immersive experience and are enjoyed by readers of all ages worldwide.",
      adminId: null
    },
    
  ]
Category.insertMany(categories)