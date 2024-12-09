import Reaction from "../models/Reaction.js"

export default async (req, res, next) => {
    try {
        let reaction = await Reaction.findOne({mangaId: req.body.mangaId, authorId: req.body.authorId, reaction: req.body.reaction})
        if(reaction){
            return res.status(400).json({
                success: false,
                messages: "Reaction already exist"
            })
        }
        next()
    } catch (error) {
        next(error)
    }
}