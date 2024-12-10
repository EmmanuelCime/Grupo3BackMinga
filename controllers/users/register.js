import { transporter } from "../../config/nodeMailer.js";
import User from "../../models/User.js";
import { welcomeEmail } from "../../utils/email.js";

let create = async(req, res, next) => {
    try {
        let user =  req.body;
        user.role = 0;
        user.online = true;
    
        let newUser = await User.create(user)
        const {password, ...dataUser} = newUser.toObject()

        await transporter.sendMail({
            from: '"Minga" <minga.rappi@gmail.com>', 
            to: newUser.email, 
            subject: "Welcome ✔", 
            html: welcomeEmail("", req.token),
          })
    
        return res.status(201).json({
            user: dataUser,
            token: req.token

        })
    } catch (error) {
        console.log(error);
        
        next(error);
    }
}


export {create}