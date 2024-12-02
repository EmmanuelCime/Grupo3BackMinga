import Chapter from "../../models/Chapter.js"

const createChapter = async (req, res, next) =>{
    try {
        const chapter = await Chapter.create(req.body)
        return res.status(201).json({
            success: true,
            chapter: chapter
        })
    } catch (e) {
        next(e)
    }
}
export {createChapter}