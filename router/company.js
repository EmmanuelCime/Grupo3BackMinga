import { Router } from "express";
import { createCompany } from "../controllers/company/create.js";
import { allCompany } from "../controllers/company/read.js";
import { updateCompany } from "../controllers/company/update.js";
import { deletedOneCompany } from "../controllers/company/delete.js";
import validator from "../middlewares/validator.js";
import schemaCreate from "../schema/company/create.js";
import schemaUpdate from "../schema/company/update.js";
import schemaDelete from "../schema/company/delete.js";

const router = Router()

//create
router.post("/create", validator(schemaCreate), createCompany)

//red
router.get("/all", allCompany)

//update
router.put("/update", validator(schemaUpdate), updateCompany)

//deleted
router.delete("/delete", validator(schemaDelete), deletedOneCompany)

export default router