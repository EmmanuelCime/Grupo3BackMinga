import { Router } from "express";
import users from "./users.js";
import authors from "./authors.js"
import authors from "./authors.js"
import company from "./company.js"
import manga from "./manga.js"
import category from "./category.js"
import chapter from "./chapter.js"
import auth from "./auth.js"
import manga from "./mangas.js"
import category from "./category.js"
import chapter from "./chapter.js"
const router = Router();

router.use('/users', users);
router.use("/company", company)

export default router;