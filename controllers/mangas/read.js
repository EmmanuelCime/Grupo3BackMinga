import Manga from "../../models/Manga.js"
import "../../models/Category.js"
import "../../models/Chapter.js"
import "../../models/Author.js"
import "../../models/Company.js"


const allMangas = async (req, res, next) =>{
    try {
        const mangas = await Manga.find().populate("authorId", "name photo").populate("categoryId", "name color hover").exec()
        return res.status(200).json({
            success: true,
            mangas: mangas
        })
    } catch (error) {
        next(error)
    }
}
const mangaByCategory = async (req, res, next)=>{
    const idManga = req.params.category
    
    try {
        const mangas = await Manga.find({categoryId: idManga}).populate("authorId", "name photo").populate("categoryId", "name color hover").exec()
        return res.status(200).json({
            success: true,
            mangas: mangas
        })
    } catch (error) {
        next(error)
    }
}
const mangasByAuthor = async (req, res, next) => {
    const authorId = req.params.authorId
    
    try {
        const mangas = await Manga.find({authorId: authorId}).populate("authorId", "name photo").populate("categoryId", "name color hover").exec()
        return res.status(200).json({
            success: true,
            mangas: mangas
        })
    } catch (error) {
        next(error)
    }
}

export {allMangas, mangaByCategory, mangasByAuthor}