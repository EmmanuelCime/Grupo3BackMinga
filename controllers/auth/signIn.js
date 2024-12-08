import User from "../../models/User.js"
import Author from "../../models/Author.js"
import Company from "../../models/Company.js"
export default async (req, res, next) => {
    try {
        let author = null
        let company = null
        const userData = await User.findOneAndUpdate({email: req.body.email}, {online: true}, {}).lean()
        const {password, ...user} = userData
        if (userData.role == 1) {
            author = await Author.find({userId: userData._id}).lean()
        }
        if (userData.role == 2) {
            company = await Company.find({userId: userData._id}).lean()
        }

        return res.status(200).json({
            success: true,
            message: "Signed In",
            user: user,
            author: author ? author[0] : null,
            company: company ? company[0] : null,
            token: req.token
        })
    } catch (error) { 
        console.log(error);
              
        next(error)
    }
}
