import { Router } from "express";
import { create } from "../controllers/reactions/create.js";
import { deleteOneReaction, deleteOneByCompany } from "../controllers/reactions/delete.js"; 
import  {allReactions, reactionsByAuthor, reactionsByCompany, reactionsByAuthorAndReaction, reactionsByCompanyAndReaction} from "../controllers/reactions/read.js"
import schema from "../schema/reaction/create.js"
import schemaUpdate from "../schema/reaction/update.js";
import validator from "../middlewares/validator.js";
import reactionExist from "../middlewares/reactionExist.js";
import { updateReaction } from "../controllers/reactions/update.js";
const router = Router();
//crear reaccion preguntarrrr
router.post('/create', validator(schema), reactionExist, create);
//borra una reaccion

router.delete('/deleteByCompany', deleteOneByCompany);
//actualizar una reaccion
router.put("/update", validator(schemaUpdate), updateReaction)

router.get('/all', allReactions);

router.delete('/deleteReaction', deleteOneReaction);
router.get('/reactionsByAuthor/:id', reactionsByAuthor);
router.get('/reactionsByCompany/:id', reactionsByCompany)
router.get('/reactionsByAuthorAndReaction/:id/:reaction', reactionsByAuthorAndReaction)
router.get('/reactionsByCompanyAndReaction/:id/:reaction', reactionsByCompanyAndReaction)
export default router