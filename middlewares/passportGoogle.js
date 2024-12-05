import User from "../models/User.js";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

export default passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_URI_BACK
        },
        async (accesToken, refreshToken, profile, done) =>{
            try {
                let user = await User.findOne({email:profile.emails[0].value})
                if (!user) {
                    user = new User({
                        email: profile.emails[0].value,
                        photo: profile.photos[0].value,
                        online: false,
                        role:0,
                        password: profile.id
                    })
                    await user.save()
                }
                return done(null, user)
            } catch (error) {
                return done(error,null)
            }
        }
        
    )
)