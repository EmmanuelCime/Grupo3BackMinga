import { Router } from "express";
import {allCategory} from "../controllers/category/read.js"
import {createCategory} from "../controllers/category/create.js"
import {updateCategory} from "../controllers/category/update.js"
import {deletedOneCategory} from "../controllers/category/delete.js"

const router = Router()

//create
router.post("/create", createCategory)

//read
router.get("/all", allCategory)

//update
router.put("/update", updateCategory)

//delete
router.delete("/delete", deletedOneCategory)

export default router