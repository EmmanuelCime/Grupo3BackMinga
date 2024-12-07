import Reaction from "../../models/Reaction.js";

let create = async(req, res, next) => {
    try {
        let reactions = await Reaction.create(req.body)
        return res.status(201).json({
            response : reactions
        })
    } catch (error) {
        next(error)
    }
}

export {create}