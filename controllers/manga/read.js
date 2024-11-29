import Manga from "../../models/Manga.js"

const allManga = async (req, res, next) =>{
    try {
        const mangas = await Manga.find().populate("userId", "name mail").exec()
        return res.status(200).json({
            success: true,
            mangas: mangas
        })
    } catch (error) {
        next(error)
    }
}

export {allManga}