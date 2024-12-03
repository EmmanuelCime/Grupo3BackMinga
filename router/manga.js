import { Router } from "express"
import { allMangas, mangaByCategory } from "../controllers/mangas/read.js"
import { createmanga } from "../controllers/mangas/create.js"
import { updateManga } from "../controllers/mangas/update.js"
import { deletedOneManga } from "../controllers/mangas/delete.js"

const router = Router()
//create
router.post("/create", createmanga)

//red
router.get("/all", allMangas)
router.get("/mangaByCategory/:category", mangaByCategory )

//update
router.put("/update", updateManga)

//delete
router.delete("/delete", deletedOneManga)

export default router