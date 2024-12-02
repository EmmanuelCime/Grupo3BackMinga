import Category from "../../models/Category.js"
import Manga from "../../models/Manga.js"

const allCategory = async (req, res, next) =>{
    try {
        const category = await Category.find().populate("adminId", "name mail").exec()
        return res.status(200).json({
            success: true,
            categories: category
        })
    } catch (error) {
        next(error)
    }
}


export {allCategory}