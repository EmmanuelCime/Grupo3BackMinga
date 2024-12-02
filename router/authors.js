import { Router } from "express";
import {allAuthors, authorId, authorByUserId} from "../controllers/authors/read.js"
import {create} from "../controllers/authors/create.js"
import { deleteOne } from "../controllers/authors/delete.js";
import { update } from "../controllers/authors/update.js";

const router = Router();
router.get('/all', allAuthors);
router.get('/id/:id' , authorId);
router.get('/userId/:id', authorByUserId)
router.post('/register', create);
router.delete('/delete', deleteOne);
router.put('/update', update)
export default router;