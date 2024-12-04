import { Router } from "express"
import { createChapter } from "../controllers/chapter/create.js"
import { allChapter, chapterByManga } from "../controllers/chapter/read.js"
import { updateChapter } from "../controllers/chapter/update.js"
import { deletedOneChapter } from "../controllers/chapter/delete.js"
import validator from "../middlewares/validator.js"
import validatorParams from "../middlewares/validator_params.js"
import schemaRead from "../schema/chapter/read.js"
import schemaCreate from "../schema/chapter/create.js"
import schemaUpdate from "../schema/chapter/update.js"
import schemaDelete from "../schema/chapter/delete.js"


const router = Router()

//create
router.post("/create", validator(schemaCreate), createChapter)

//red
router.get("/all", allChapter)
router.get("/chapterByManga/:manga", validatorParams(schemaRead), chapterByManga)

//update
router.put("/update", validator(schemaUpdate), updateChapter)

//delete
router.delete("/delete", validator(schemaDelete), deletedOneChapter)

export default router