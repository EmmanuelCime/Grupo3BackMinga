import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import signOut from "../controllers/auth/signOut.js";
import accountNoExist from "../middlewares/accountNoExist.js"
import passwordIsOk from "../middlewares/passwordIsOk.js"
import generateToken from "../middlewares/generateToken.js";
import passport from "../middlewares/passport.js"
import passportGoogle from "../middlewares/passportGoogle.js";
import tokenVerification from "../controllers/auth/tokenVerification.js"
import signInGoogle from "../controllers/auth/signInGoogle.js";
const router = Router();

router.post('/signin', accountNoExist, passwordIsOk,generateToken, signIn)
router.post('/signOut',passport.authenticate('jwt',{session:false}), signOut)
router.get('/signin/google', passportGoogle.authenticate('google', {session:false, scope: ['profile', 'email']}))
router.get('/signin/google/callback', passportGoogle.authenticate('google', {session:false, failureRedirect: '/login'}), generateToken, signInGoogle)
export default router;