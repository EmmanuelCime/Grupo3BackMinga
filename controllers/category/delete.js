import Category from "../../models/Category.js"


const deletedOneCategory = async (req,res,next) =>{
    try {
        const deletedCategory = await Category.deleteOne({_id: req.body._id})
        return res.status(200).json({
            success: true,
            deletedCategory: deletedCategory
        })
    } catch (error) {
        next(error)
    }
}

export {deletedOneCategory}