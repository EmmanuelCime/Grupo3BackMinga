import Reaction from "../../models/Reaction.js"

const deleteOneByAuthor = async(req, res, next) => {
    try {
        let authorId = req.body.authorId;
        let mangaId = req.body.mangaId;
        let reactionId = await Reaction.deleteMany({authorId: authorId, mangaId: mangaId} )
        return res.status(200).json({response: reactionId})
    } catch(error){
        next(error)
    }
}

const deleteOneByCompany = async(req, res, next) => {
    try {
        let companyId = req.body.companyId;
        let mangaId = req.body.mangaId;
        let reactionId = await Reaction.Delete({mangaId: mangaId, companyId: companyId} )
        return res.status(200).json({response: reactionId})
    } catch(error){
        next(error)
    }
}

export {deleteOneByAuthor, deleteOneByCompany}