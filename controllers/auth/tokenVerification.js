import Author from "../../models/Author.js"
import Company from "../../models/Company.js"

const tokenVerification = async (req, res, next) =>{
    try {
        let author = null
        let company = null
        if (req.user.role == 1) {
            author = await Author.find({userId: req.user._id}).lean()
        }
        if (req.user.role == 2) {
            company = await Company.find({userId: req.user._id}).lean()
        }
        return res.status(200).json({
            user: req.user,
            author: author ? author[0]: null,
            company: company ? company[0]: null

        })
    } catch (error) {
        next(error)
    }
    
}
export default tokenVerification