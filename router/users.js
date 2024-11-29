import { Router } from "express";

import { allUsers } from "../controllers/users/read.js";
import { create } from "../controllers/users/create.js";

const router = Router();

router.get('/all', allUsers);
router.post('/register', create)

export default router;