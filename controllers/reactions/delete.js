import Reaction from "../../models/Reaction.js"

const deleteOneReaction = async(req, res, next) => {
    try {
        let reactionId = await Reaction.deleteOne({_id: req.body._id})
        return res.status(200).json({
            response: reactionId,
            _id: req.body._id
        })
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

export {deleteOneReaction, deleteOneByCompany}