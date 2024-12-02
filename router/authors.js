import { Router } from "express";

import { allAuthors } from "../controllers/authors/read.js";
import { create } from "../controllers/authors/create.js";

const router = Router();

router.get('/all', allAuthors);
router.post('/register', create);

export default router;