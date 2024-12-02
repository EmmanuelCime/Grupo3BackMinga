import { Router } from "express"
import { allMangas, mangaByCategory } from "../controllers/magas/read.js"
import { createmanga } from "../controllers/magas/create.js"
import { updateManga } from "../controllers/magas/update.js"
import { deletedOneManga } from "../controllers/magas/delete.js"

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