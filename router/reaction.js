import { Router } from "express";
import { create } from "../controllers/reactions/create.js";
import { deleteOneByAuthor, deleteOneByCompany } from "../controllers/reactions/delete.js"; 
import  {allReactions, reactionsByAuthor, reactionsByCompany, reactionsByAuthorAndReaction, reactionsByCompanyAndReaction} from "../controllers/reactions/read.js"
import schema from "../schema/reaction/create.js"
import validator from "../middlewares/validator.js";
import reactionExist from "../middlewares/reactionExist.js";
const router = Router();

router.post('/create', validator(schema), reactionExist, create);
router.delete('/deleteByAuthor', deleteOneByAuthor);
router.delete('/deleteByCompany', deleteOneByCompany);

router.get('/all', allReactions);
router.get('/reactionsByAuthor/:id', reactionsByAuthor);
router.get('/reactionsByCompany/:id', reactionsByCompany)
router.get('/reactionsByAuthorAndReaction/:id/:reaction', reactionsByAuthorAndReaction)
router.get('/reactionsByCompanyAndReaction/:id/:reaction', reactionsByCompanyAndReaction)
export default router