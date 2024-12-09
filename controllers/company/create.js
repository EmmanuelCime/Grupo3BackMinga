import Company from "../../models/Company.js"
import User from "../../models/User.js"
const createCompany = async (req, res, next) =>{
    try {
        const user = req.body.userId
        await User.findOneAndUpdate({_id: user}, {role:2})
        const company = await Company.create(req.body)
        return res.status(201).json({
            success: true,
            company: company
        })
    } catch (e) {
        next(e)
    }
}
export {createCompany}