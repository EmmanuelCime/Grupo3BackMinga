import "dotenv/config.js"
import "../../config/database.js"
import Reaction from "../Reaction.js"
import '../Reaction.js'

const arrayReactions = [
    {
        mangaId:"674d963db2a4d414d65a7904",
        authorId:"674d5fcf4e75429504006e1b",
        reaction: 1
    },
    {
        mangaId:"674d963eb2a4d414d65a791e",
        authorId:"674d5fcf4e75429504006e1b",
        reaction: 1
    },
    {
        mangaId:"674d963fb2a4d414d65a7934",
        authorId:"674d5fcf4e75429504006e1b",
        reaction: 1 
    },
    {
        mangaId:"674d9646b2a4d414d65a79d2",
        authorId:"674d280f08195416088f1276",
        reaction: 1 
    },
    {
        mangaId:"674d9646b2a4d414d65a79d2",
        companyId:"674d74846b38500b22734d32",
        reaction: 3 
    },
    {
        mangaId:"674d964bb2a4d414d65a7a42",
        companyId:"674d74846b38500b22734d36",
        reaction: 1
    }
]

Reaction.insertMany(arrayReactions);