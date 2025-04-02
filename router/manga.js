import { Router } from "express"
import { allMangas, favoriteMangaByAuthorOrCompany, mangaByCategory, mangasByAuthorOrCompany } from "../controllers/mangas/read.js"
import { createmanga } from "../controllers/mangas/create.js"
import { updateManga } from "../controllers/mangas/update.js"
import { deletedOneManga } from "../controllers/mangas/delete.js"
import validator from "../middlewares/validator.js"
import validarorParams from "../middlewares/validator_params.js"
import validatorQuery from "../middlewares/validator_query.js"
import schemaCreate from "../schema/manga/create.js"
import {schemaCategory, schemaAuthorOrCompany} from "../schema/manga/read.js"
import schemaUpdate from "../schema/manga/update.js"
import schemaDelete from "../schema/manga/delete.js"
import passport from "../middlewares/passport.js"

const router = Router()
//create
router.post("/create", validator(schemaCreate), createmanga)

//red
router.get("/all", allMangas)
router.get("/mangaByCategory/:category", validarorParams(schemaCategory), mangaByCategory )
router.get("/mangasByAuthorOrCompany", validatorQuery(schemaAuthorOrCompany),  passport.authenticate('jwt',{session:false}), mangasByAuthorOrCompany)
router.get("/favoriteManga", favoriteMangaByAuthorOrCompany)

//update
router.put("/update/:id", validator(schemaUpdate), updateManga)

//delete
router.delete("/delete", validator(schemaDelete), deletedOneManga)

export default router