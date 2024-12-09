import Chapter from "../../models/Chapter.js"

const allChapter = async (req, res, next) =>{
    try {
        const chapters = await Chapter.find().populate("mangaId", "title coverPhoto description coverPhoto").exec()
        return res.status(200).json({
            success: true,
            chapters: chapters
        })
    } catch (error) {
        next(error)
    }
}

const chapterByManga = async(req, res, next) =>{
    const idManga = req.params.manga
    try {
        const chapters = await Chapter.find({mangaId: idManga}).populate("mangaId", "title description coverPhoto").exec()
        return res.status(200).json({
            success: true,
            chapters: chapters
        })
    } catch (error) {
        next(error)
    }
}
export {allChapter, chapterByManga}