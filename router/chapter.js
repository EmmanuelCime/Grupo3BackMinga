import { Router } from "express"
import { createChapter } from "../controllers/chapter/create.js"
import { allChapter, chapterByManga } from "../controllers/chapter/read.js"
import { updateChapter } from "../controllers/chapter/update.js"
import { deletedOneChapter } from "../controllers/chapter/delete.js"


const router = Router()

//create
router.post("/create", createChapter)

//red
router.get("/all", allChapter)
router.get("/chapterByManga/:manga", chapterByManga)

//update
router.put("/update", updateChapter)

//delete
router.delete("/delete", deletedOneChapter)

export default router