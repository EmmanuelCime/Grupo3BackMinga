import { Router } from "express"
import validatorParams from "../middlewares/validator_params.js"
import validator from "../middlewares/validator.js"
import schemaRead from "../schema/comment/read.js"
import schemaUpdate from "../schema/comment/update.js"
import schemaCreate from "../schema/comment/create.js"
import schemaDelete from "../schema/comment/delete.js"
import { createComment } from "../controllers/comment/create.js"
import { allComment, commentByChapter } from "../controllers/comment/read.js"
import { updateComment } from "../controllers/comment/update.js"
import { deletedOneComment } from "../controllers/comment/delete.js"


const router = Router()

//create
router.post("/create", validator(schemaCreate), createComment)

//read
router.get("/all", allComment)
router.get("/commentByChapter/:chapter", validatorParams(schemaRead), commentByChapter)

//update
router.put("/update", validator(schemaUpdate), updateComment)

//delete
router.delete("/delete", validator(schemaDelete), deletedOneComment)

export default router