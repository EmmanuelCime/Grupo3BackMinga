import Reaction from "../../models/Reaction.js"

const deleteOne = async(req, res, next) => {
    try {
        let reactionId = await Reaction.deleteOne({_id: req.body._id})
        return res.status(200).json({response: reactionId})
    } catch(error){
        next(error)
    }
}

export {deleteOne}