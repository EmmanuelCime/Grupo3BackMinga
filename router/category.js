<<<<<<< HEAD
import { Router } from "express"
import { allCategory } from "../controllers/category/read.js"
import { createCategory } from "../controllers/category/create.js"
import { updateCategory } from "../controllers/category/update.js"
import { deletedOneCategory } from "../controllers/category/delete.js"
import validator from "../middlewares/validator.js"
import schemaCreate from "../schema/category/create.js"
import schemaUpdate from "../schema/category/update.js"
import schemaDelete from "../schema/category/delete.js"
=======
import { Router } from "express";
import {allCategory} from "../controllers/category/read.js"
import {createCategory} from "../controllers/category/create.js"
import {updateCategory} from "../controllers/category/update.js"
import {deletedOneCategory} from "../controllers/category/delete.js"
>>>>>>> c7f291e5a5ffe8cef65a1ac948d43f9c627e3710

const router = Router()

//create
<<<<<<< HEAD
router.post("/create",validator(schemaCreate), createCategory)
=======
router.post("/create", createCategory)
>>>>>>> c7f291e5a5ffe8cef65a1ac948d43f9c627e3710

//read
router.get("/all", allCategory)

//update
<<<<<<< HEAD
router.put("/update", validator(schemaUpdate), updateCategory)

//delete
router.delete("/delete", validator(schemaDelete), deletedOneCategory)
=======
router.put("/update", updateCategory)

//delete
router.delete("/delete", deletedOneCategory)
>>>>>>> c7f291e5a5ffe8cef65a1ac948d43f9c627e3710

export default router