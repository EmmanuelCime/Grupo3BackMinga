import Manga from "../../models/Manga.js"
import "../../models/Category.js"
import "../../models/Chapter.js"
import "../../models/Author.js"
import "../../models/Company.js"
import Reaction from "../../models/Reaction.js"


const allMangas = async (req, res, next) =>{
    try {
        const mangas = await Manga.find().populate("authorId", "name photo").populate("companyId", "name photo").populate("categoryId", "name color hover").exec()
        return res.status(200).json({
            success: true,
            mangas: mangas
        })
    } catch (error) {
        next(error)
    }
}
const mangaByCategory = async (req, res, next)=>{
    const idcategory = req.params.category
    
    try {
        const mangas = await Manga.find({categoryId: idcategory}).populate("authorId", "name photo").populate("companyId", "name photo").populate("categoryId", "name color hover").exec()
        return res.status(200).json({
            success: true,
            mangas: mangas
        })
    } catch (error) {
        next(error)
    }
}
const mangasByAuthorOrCompany = async (req, res, next) => {
    const authorId = req.query.author
    const companyId = req.query.company
    
    try {
        const mangas = await Manga.find({authorId: authorId}).populate("authorId", "name photo").populate("companyId", "name photo").populate("categoryId", "name color hover").exec()
        return res.status(200).json({
            success: true,
            mangas: mangas
        })
    } catch (error) {
        next(error)
    }
}
const favoriteMangaByAuthorOrCompany = async(req, res, next)=>{
    try {
        const idAuthor = req.query.author
        const idCompany = req.query.company
        let favorite = null
        if (idAuthor) {
            let manga = []
            favorite = await Reaction.find({authorId: idAuthor}).lean()
            for(const fav of favorite){
                let mang = await Manga.findById(fav._id)
                manga.push(mang)
            }
            return res.status(200).json({
                succes: true,
                favorite: manga
            })
            
        }
        if (idCompany) {
            let manga = []
            favorite = await Reaction.find({companyId: idCompany}).lean()
            for(const fav of favorite){
                let mang = await Manga.findById(fav._id)
                manga.push(mang)
            }
            return res.status(200).json({
                succes: true,
                favorite: manga
            })
            
        }
    } catch (error) {
        return next(error)
    }
}

export {allMangas, mangaByCategory, mangasByAuthorOrCompany, favoriteMangaByAuthorOrCompany}

