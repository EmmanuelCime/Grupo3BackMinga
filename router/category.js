import { Router } from "express"
import { allCategory } from "../controllers/category/read.js"
import { createCategory } from "../controllers/category/create.js"
import { updateCategory } from "../controllers/category/update.js"
import { deletedOneCategory } from "../controllers/category/delete.js"
import validator from "../middlewares/validator.js"
import schemaCreate from "../schema/category/create.js"
import schemaUpdate from "../schema/category/update.js"
import schemaDelete from "../schema/category/delete.js"

const router = Router()

//create
router.post("/create",validator(schemaCreate), createCategory)

//read
router.get("/all", allCategory)

//update
router.put("/update", validator(schemaUpdate), updateCategory)

//delete
router.delete("/delete", validator(schemaDelete), deletedOneCategory)

export default router