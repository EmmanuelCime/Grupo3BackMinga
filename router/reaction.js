import { Router } from "express";
import { create } from "../controllers/reactions/create.js";
import { deleteOne } from "../controllers/reactions/delete.js"; 
import  {allReactions, reactionsByAuthor, reactionsByCompany} from "../controllers/reactions/read.js"
import schema from "../schema/reaction/create.js"
import validator from "../middlewares/validator.js";
const router = Router();

router.post('/create', validator(schema), create);
router.post('/delete', deleteOne)
router.get('/all', allReactions);
router.get('/reactionsByAuthor/:id', reactionsByAuthor);
router.get('/reactionsByCompany/:id', reactionsByCompany)
export default router