import Manga from "../../models/Manga.js"

const deletedOneManga = async (req,res,next) =>{
    try {
        const deletedManga = await Manga.deleteOne({_id: req.body._id})
        return res.status(200).json({
            success: true,
            deletedManga: deletedManga
        })
    } catch (error) {
        next(error)
    }
}

export {deletedOneManga}