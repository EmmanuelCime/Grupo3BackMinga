import "dotenv/config.js"
import "../../config/database.js"
import Category from "../Category.js"
import "../User.js"
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
      name: "Kodomo",
      color: "#E0DBFF",
      hover: "#8883F0",
      coverPhoto: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/05/pjimage-(7)-3.jpg",
      charcterPhoto: "https://i0.wp.com/senpai.com.mx/wp-content/uploads/2020/07/Iron-Man-1280x720-37.jpg?fit=1280%2C720&ssl=1",
      description: "Kodomo is aimed at young children. The stories are usually educational and entertaining, focusing on teaching basic values and skills.",
      adminId: null
    }
  ]
Category.insertMany(categories)