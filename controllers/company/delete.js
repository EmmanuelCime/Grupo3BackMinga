import Company from "../../models/Company.js"

const deletedOneCompany = async (req,res,next) =>{
    try {
        const deletedCompany = await Company.deleteOne({_id: req.body._id})
        return res.status(200).json({
            success: true,
            deletedCompany: deletedCompany
        })
    } catch (error) {
        next(error)
    }
}

export {deletedOneCompany}