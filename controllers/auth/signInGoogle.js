import User from "../../models/User.js";

export default async (req,res,next) =>{
    try {
        await User.findOneAndUpdate(
            {email: req.user.email},
            {online: true}
        )
        return res.redirect("https://mingaapp.netlify.app/?token="+req.token)
    } catch (error) {
        next(error)
    }
}



