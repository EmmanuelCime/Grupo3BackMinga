import { Router } from "express";

import { allUsers } from "../controllers/users/read.js";
import { create } from "../controllers/users/register.js";
import { deleteOne } from "../controllers/users/delete.js";
import { update } from "../controllers/users/update.js";
import validator from "../middlewares/validator.js";
import schema from "../schema/users/create.js";
import existingUser from "../middlewares/existingUser.js";
import createHash from "../middlewares/createHash.js"
import passport from "../middlewares/passport.js";
import generateToken from "../middlewares/generateToken.js";

const router = Router();

router.get('/all',passport.authenticate('jwt',{session:false}), allUsers);
router.post('/register', validator(schema), existingUser, createHash, generateToken, create);
router.delete('/delete',passport.authenticate('jwt',{session:false}), deleteOne);
router.put('/update',passport.authenticate('jwt',{session:false}), update);

export default router;