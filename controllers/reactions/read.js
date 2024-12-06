import Reaction from "../../models/Reaction.js"

let allReactions = async (req, res, next) => {
    try {
        let all = await Reaction.find();
        return res.status(200).json({reactions: all})
    } catch (error) {
        next(error)
    }
}

let reactionsByAuthor = async(req, res, next) =>{
    try {
        let id = req.params.id
        let reactions = await Reaction.find({authorId: id})
        return res.status(200).json({response : reactions})
    } catch (error) {
        next(error)
    }
}

let reactionsByCompany = async(req, res, next) =>{
    try {
        let id = req.params.id
        let reactions = await Reaction.find({companyId: id})
        return res.status(200).json({response : reactions})
    } catch (error) {
        next(error)
    }
}
export {allReactions, reactionsByAuthor, reactionsByCompany}