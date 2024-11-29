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
      userId: ""
    },
    {
      name: "Toei Animation",
      webSite: "http://www.toei-animation.com/",
      description: "Known for its productions such as Dragon Ball and One Piece.",
      photo: "http://www.toei-animation.com/images/logo.png",
      active: true,
      userId: ""
    },
    {
      name: "Sunrise",
      webSite: "http://www.sunrise-inc.co.jp/",
      description: "Renowned for the Gundam series and Cowboy Bebop.",
      photo: "http://www.sunrise-inc.co.jp/images/logo.png",
      active: true,
      userId: ""
    },
    {
      name: "Madhouse",
      webSite: "http://www.madhouse.co.jp/",
      description: "Famous for works like Death Note and One Punch Man.",
      photo: "http://www.madhouse.co.jp/images/logo.png",
      active: true,
      userId: ""
    },
    {
      name: "Bones",
      webSite: "http://www.bones.co.jp/",
      description: "Known for Fullmetal Alchemist and My Hero Academia.",
      photo: "http://www.bones.co.jp/images/logo.png",
      active: true,
      userId: ""
    },
    {
      name: "A-1 Pictures",
      webSite: "http://a1p.jp/",
      description: "Popular for Sword Art Online and Fairy Tail.",
      photo: "http://a1p.jp/images/logo.png",
      active: true,
      userId: ""
    },
    {
      name: "Studio Pierrot",
      webSite: "http://en.pierrot.jp/",
      description: "Known for Naruto and Bleach.",
      photo: "http://en.pierrot.jp/images/logo.png",
      active: true,
      userId: ""
    },
    {
      name: "Production I.G",
      webSite: "http://www.production-ig.co.jp/",
      description: "Famous for Ghost in the Shell and Psycho-Pass.",
      photo: "http://www.production-ig.co.jp/images/logo.png",
      active: true,
      userId: ""
    },
    {
      name: "Kyoto Animation",
      webSite: "http://www.kyotoanimation.co.jp/",
      description: "Known for Clannad and A Silent Voice.",
      photo: "http://www.kyotoanimation.co.jp/images/logo.png",
      active: true,
      userId: ""
    },
    {
      name: "Trigger",
      webSite: "http://www.st-trigger.co.jp/",
      description: "Famous for Kill la Kill and Little Witch Academia.",
      photo: "http://www.st-trigger.co.jp/images/logo.png",
      active: true,
      userId: ""
    }
  ]

Company.insertMany(company)