import Manga from "../../models/Manga.js"

const createmanga = async (req, res, next) =>{
    try {
        const manga = await Manga.create(req.body)
        return res.status(201).json({
            success: true,
            manga: manga
        })
    } catch (e) {
        next(e)
    }
}
export {createmanga}
