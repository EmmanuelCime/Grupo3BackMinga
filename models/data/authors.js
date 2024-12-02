import "dotenv/config.js";
import "../../config/database.js";
import Author from "../Author.js";

const arrayAuthors = [
    { 
        name: "Haro", 
        lastName: "Aso", 
        city: "Osaka", 
        country: "Japan", 
        dateBorn: "", 
        photo: "https://www.tebeosfera.com/T3content/img/T3_autores/0/2/42602.jpg",
        userId: "674d25c908195416088f126d", 
        active: true 
    },
    { 
        name: "Isayama", 
        lastName: "Hajime", 
        city: "Tokyo", 
        country: "Japan", 
        dateBorn: "August 29, 1986", 
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/FIBD2023HajimeIsayama_01.jpg/800px-FIBD2023HajimeIsayama_01.jpg", 
        userId: "674d26ed08195416088f1270", 
        active: true 
    },
    { 
        name: "Kaiu Shirai", 
        lastName: "", 
        city: "Gifu", 
        country: "Japan", 
        dateBorn: "", 
        photo: "https://static.wikia.nocookie.net/yakusokunoneverland/images/f/f2/Kaiu_Shirai%27s_icon.png/revision/latest?cb=20210506034045&path-prefix=es", 
        userId: "674d27a608195416088f1273", 
        active: true 
    },
    { 
        name: "Kubo", 
        lastName: "Noriaki", 
        city: "Hiroshima prefecture", 
        country: "Japan", 
        dateBorn: "June 26, 1977", 
        photo: "https://static.wikia.nocookie.net/burnthewitch/images/1/1e/Tite_Kubo.png/revision/latest?cb=20200921225303&path-prefix=es", 
        userId: "674d280f08195416088f1276", 
        active: true 
    },
    { 
        name: "Uchida", 
        lastName: "Naoyuki", 
        city: "Kyoto", 
        country: "Japan", 
        dateBorn: "December 23, 1960", 
        photo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Yukito_Ayatsuji_%28Naoyuki_Uchida%29.jpg", 
        userId: "674d288708195416088f1279", 
        active: true 
    },
    { 
        name: "Oku", 
        lastName: "Hiroya", 
        city: "Fukuoka", 
        country: "Japan", 
        dateBorn: "September 16, 1967", 
        photo: "https://ramenparados.com/wp-content/uploads/2016/02/Hiroya-Oku.jpg", 
        userId: "674d28df08195416088f127c", 
        active: false 
    },
    { 
        name: "Asano", 
        lastName: "Inio", 
        city: "Isioka", 
        country: "Japan", 
        dateBorn: "September 22, 1980", 
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Inio_Asano_at_TCAF_2018.jpg/800px-Inio_Asano_at_TCAF_2018.jpg", 
        userId: "674d296608195416088f127f", 
        active: false 
    },
    { 
        name: "Geoff", 
        lastName: "Johns", 
        city: "Detroit", 
        country: "USA", 
        dateBorn: "January 25, 1973", 
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Geoff_Johns_%2833733595751%29.jpg/800px-Geoff_Johns_%2833733595751%29.jpg", 
        userId: "674d29c908195416088f1282", 
        active: true 
    },
    { 
        name: "Greg", 
        lastName: "Pak", 
        city: "New York", 
        country: "USA", 
        dateBorn: "Augusth 23, 1968", 
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Nyupak_white.png/800px-Nyupak_white.png", 
        userId: "674d2a3808195416088f1285", 
        active: false 
    },
    { 
        name: "Brian Michael", 
        lastName: "Bendis", 
        city: "Cleveland", 
        country: "USA", 
        dateBorn: "Augusth 18, 1967", 
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Bendis.jpg/220px-Bendis.jpg", 
        userId: "674d2a9908195416088f1288", 
        active: true 
    },
    { 
        name: "Tom", 
        lastName: "King", 
        city: "Southern", 
        country: "USA", 
        dateBorn: "July 15, 1978", 
        photo: "https://static.wikia.nocookie.net/marvel_dc/images/c/ce/Tom_King_001.jpeg/revision/latest?cb=20210123151709", 
        userId: "674d2b2e08195416088f128b", 
        active: true 
    },
    { 
        name: "Tajiri", 
        lastName: "Satoshi", 
        city: "Tokyo", 
        country: "Japan", 
        dateBorn: "Augusth 28, 1965", 
        photo: "https://phantom-elmundo.unidadeditorial.es/40c9bca09e575b50a30f36b5f9f1d5a3/crop/28x0/1041x675/resize/700/f/webp/assets/multimedia/imagenes/2022/12/21/16716085089891.jpg", 
        userId: "674d2c1608195416088f128e", 
        active: true 
    },
    { 
        name: "Saburouta", 
        lastName: "", 
        city: "Tokyo", 
        country: "Japan", 
        dateBorn: "", 
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvdfCY7ZlC3ytmj2r0rLsN4ZBAFmQyOa_yIg&s", 
        userId: "674d2ca408195416088f1291", 
        active: true 
    },
    { 
        name: "Io", 
        lastName: "Sakisaka", 
        city: "Tokyo", 
        country: "Japan", 
        dateBorn: "June 8, 1975", 
        photo: "https://static.wikia.nocookie.net/manga/images/8/85/Io_Sakisaka.png/revision/latest?cb=20150615032020&path-prefix=es", 
        userId: "674d2d0608195416088f1294", 
        active: false 
    }
]
  


Author.insertMany(arrayAuthors)