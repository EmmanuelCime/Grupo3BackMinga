import "dotenv/config.js"
import "../../config/database.js"
import Company from "../Company.js"

const arrayCompanies = [
    {
      name: "Shogakukan",
      webSite: "https://www.shogakukan.co.jp",
      description: "Shogakukan is one of the largest publishing companies in Japan, known for its manga, light novels, and magazines. It publishes popular titles like Detective Conan and Doraemon.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Shogakukan_logo.svg",
      active: true,
      userId: "674d624c99b8d9450630caf3"
    },
    {
      name: "Kodansha",
      webSite: "https://www.kodansha.co.jp",
      description: "Kodansha is one of Japan's leading publishing companies, famous for its manga and novels. It publishes popular works like Attack on Titan, Sailor Moon, and Tokyo Revengers.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Kodansha_logo.svg",
      active: true,
      userId: "674d62c799b8d9450630caf6"
    },
    {
      name: "Shueisha",
      webSite: "https://www.shueisha.co.jp",
      description: "Shueisha is a leading publishing company in Japan, responsible for publishing popular manga such as One Piece, Naruto, and Bleach.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Shueisha_logo.svg",
      active: true,
      userId: "674d632799b8d9450630caf9"
    },
    {
      name: "Shonen Jump",
      webSite: "https://www.shonenjump.com",
      description: "Shonen Jump is a weekly manga magazine aimed at young readers, published by Shueisha. Iconic series such as Dragon Ball, My Hero Academia, and One Piece have been serialized in it.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Shonen_Jump_logo.svg",
      active: true,
      userId: "674d636e99b8d9450630cafc"
    },
    {
      name: "Kadokawa",
      webSite: "https://www.kadokawa.co.jp",
      description: "Kadokawa is a Japanese publishing company specializing in manga, light novels, and games. It is known for titles like Sword Art Online and Re:Zero.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Kadokawa_logo.svg",
      active: true,
      userId: "674d63f399b8d9450630caff"
    },
    {
      name: "Young Jump",
      webSite: "https://www.youngjump.jp",
      description: "Young Jump is a weekly manga magazine published by Shueisha, aimed at a more adult audience. Popular series like Tokyo Ghoul and The Promised Neverland have been serialized in it.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Young_Jump_logo.svg",
      active: true,
      userId: "674d73d5efbbbdb40f496802"
    },
    {
      name: "DC Comics",
      webSite: "https://www.dccomics.com",
      description: "DC Comics is one of the largest comic book publishers in the United States, known for iconic characters like Superman, Batman, Wonder Woman, and The Flash.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/DC_Comics_logo.svg",
      active: true,
      userId: "674d64b499b8d9450630cb02"
    },
    {
      name: "Marvel Comics",
      webSite: "https://www.marvel.com",
      description: "Marvel Comics is one of the largest comic book publishers in the United States, famous for creating iconic superheroes like Spider-Man, Iron Man, Thor, and the X-Men.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Marvel_Comics_logo.svg",
      active: true,
      userId: "674d64fb99b8d9450630cb05"
    },
    {
      name: "Coro Coro Comics",
      webSite: "https://www.shogakukan.co.jp/magazines/253",
      description: "Coro Coro Comics is a monthly magazine aimed at children, known for its manga based on video games like Pokémon and other popular franchises.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/1/13/CoroCoroLogo.png",
      active: true,
      userId: "674d657d99b8d9450630cb08"
    },
    {
      name: "Ichijinsha",
      webSite: "https://www.ichijinsha.co.jp",
      description: "Ichijinsha is a Japanese publishing company known for its work in manga, especially in the shoujo and BL (Boys' Love) genres. It publishes titles like Yuri!!! on Ice and Aoharu x Machinegun.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Ichijinsha_logo.svg",
      active: true,
      userId: "674d65dd99b8d9450630cb0b"
    }
  ]
  
  Company.insertMany(arrayCompanies)