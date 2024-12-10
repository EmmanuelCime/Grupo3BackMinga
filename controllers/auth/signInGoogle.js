import User from "../../models/User.js";
import { transporter } from "../../config/nodeMailer.js";
import { welcomeEmail } from "../../utils/email.js";
export default async (req,res,next) =>{
    try {
        await User.findOneAndUpdate(
            {email: req.user.email},
            {online: true}
        )
        if (req.user.create) {
            await transporter.sendMail({
                from: '"Minga" <minga.rappi@gmail.com>', 
                to: req.user.email, 
                subject: "Welcome ✔", 
                html: welcomeEmail(req.user.name, req.token),
              })
        }
        return res.redirect("https://grupo3-front-minga.vercel.app/?token="+req.token)
    } catch (error) {
        next(error)
    }
}



