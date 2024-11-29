import { Router } from "express";
import users from "./users.js"
import company from "./company.js"

const router = Router();

router.use('/users', users);
router.use("/company", company)

export default router;