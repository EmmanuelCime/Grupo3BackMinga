import { Router } from "express";
import users from "./users.js";
import authors from "./authors.js"
import company from "./company.js"
import manga from "./mangas.js"
import category from "./category.js"
import chapter from "./chapter.js"
const router = Router();

router.use('/users', users);
router.use('/authors', authors)
router.use("/company", company)
router.use("/manga", manga)
router.use("/category", category)
router.use("/chapter", chapter)

export default router;