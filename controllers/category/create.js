import Category from "../../models/Category.js"

const createCategory = async (req, res, next) =>{
    try {
        const category = await Category.create(req.body)
        return res.status(201).json({
            success: true,
            category: category
        })
    } catch (e) {
        next(e)
    }
}
export {createCategory}