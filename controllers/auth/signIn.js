import User from "../../models/User.js"

export default async (req, res, next) => {
    try {
         const userData = await User.findOneAndUpdate({email: req.body.email}, {online: true}, {})
        const {password, ...user} = userData
        return res.status(200).json({
            success: true,
            message: "Signed In",
            user: user, 
            token: req.token
        })
    } catch (error) {
        next(error)
    }
}
