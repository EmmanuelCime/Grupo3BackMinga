import Company from "../../models/Company.js"

const createCompany = async (req, res, next) =>{
    try {
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