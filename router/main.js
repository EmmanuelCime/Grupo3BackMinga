import { Router } from "express";
import users from "./users.js";
import authors from "./authors.js"
import company from "./company.js"
import manga from "./manga.js"
import category from "./category.js"
import chapter from "./chapter.js"
import auth from "./auth.js"
import comment from "./comment.js"
import reaction from "./reaction.js"
import donate from "./donate.js"
const router = Router();

router.use('/users', users);
router.use('/authors', authors)
router.use('/auth', auth)
router.use("/company", company);
router.use("/manga", manga)
router.use("/category", category)
router.use("/chapter", chapter)
router.use('/reaction', reaction)
router.use("/comment", comment)
router.use('/donate', donate)

export default router;