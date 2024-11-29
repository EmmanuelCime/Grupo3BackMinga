import { Router } from "express";
import users from "./users.js";
import authors from "./authors.js"

const router = Router();

router.use('/users', users);
router.use('/authors', authors)

export default router;