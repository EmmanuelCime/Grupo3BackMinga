import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNoExist from "../middlewares/accountNoExist.js"
import passwordIsOk from "../middlewares/passwordIsOk.js"
import generateToken from "../middlewares/generateToken.js";
const router = Router();

router.post('/signin', accountNoExist, passwordIsOk,generateToken, signIn)

export default router;