import { Router } from "express"
import { allMangas, favoriteMangaByAuthorOrCompany, mangaByCategory, mangasByAuthor } from "../controllers/mangas/read.js"
import { createmanga } from "../controllers/mangas/create.js"
import { updateManga } from "../controllers/mangas/update.js"
import { deletedOneManga } from "../controllers/mangas/delete.js"
import validator from "../middlewares/validator.js"
import validarorParams from "../middlewares/validator_params.js"
import schemaCreate from "../schema/manga/create.js"
import {schemaCategory, schemaAuthor} from "../schema/manga/read.js"
import schemaUpdate from "../schema/manga/update.js"
import schemaDelete from "../schema/manga/delete.js"

const router = Router()
//create
router.post("/create", validator(schemaCreate), createmanga)

//red
router.get("/all", allMangas)
router.get("/mangaByCategory/:category", validarorParams(schemaCategory), mangaByCategory )
router.get("/mangasByAuthor/:authorId", validarorParams(schemaAuthor), mangasByAuthor)
router.get("/favoriteManga", favoriteMangaByAuthorOrCompany)

//update
router.put("/update", validator(schemaUpdate), updateManga)

//delete
router.delete("/delete", validator(schemaDelete), deletedOneManga)

export default router