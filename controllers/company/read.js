import Company from "../../models/Company.js"

const allCompany = async (req, res, next) =>{
    try {
        const companies = await Company.find().populate("userId", "name mail").exec()
        return res.status(200).json({
            success: true,
            companies: companies
        })
    } catch (error) {
        next(error)
    }
}

export {allCompany}