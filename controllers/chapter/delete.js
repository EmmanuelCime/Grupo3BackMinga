import Chapter from "../../models/Chapter.js";
const deletedOneChapter = async (req,res,next) =>{
    try {
        const deletedChapter = await Chapter.deleteOne({_id: req.body._id})
        return res.status(200).json({
            success: true,
            deletedChapter: deletedChapter
        })
    } catch (error) {
        next(error)
    }
}

export {deletedOneChapter}