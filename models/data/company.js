import "dotenv/config.js"
import "../../config/database.js"
import Company from "../Company.js"

const company = [
    {
      name: "Studio Ghibli",
      webSite: "http://www.ghibli.jp/",
      description: "Famous for its animated feature films such as My Neighbor Totoro and Spirited Away.",
      photo: "http://www.ghibli.jp/images/logo.png",
      active: true,
      userId: "674a4177753cfa6d45fdf41e"
    },
    {
      name: "Toei Animation",
      webSite: "http://www.toei-animation.com/",
      description: "Known for its productions such as Dragon Ball and One Piece.",
      photo: "http://www.toei-animation.com/images/logo.png",
      active: true,
      userId: "674a4177753cfa6d45fdf41d"
    },
    {
      name: "Sunrise",
      webSite: "http://www.sunrise-inc.co.jp/",
      description: "Renowned for the Gundam series and Cowboy Bebop.",
      photo: "http://www.sunrise-inc.co.jp/images/logo.png",
      active: true,
      userId: "674a4177753cfa6d45fdf41c"
    },
    {
      name: "Madhouse",
      webSite: "http://www.madhouse.co.jp/",
      description: "Famous for works like Death Note and One Punch Man.",
      photo: "http://www.madhouse.co.jp/images/logo.png",
      active: true,
      userId: "674a4177753cfa6d45fdf41b"
    },
    
  ]

Company.insertMany(company)