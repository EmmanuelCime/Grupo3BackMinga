import Reaction from "../../models/Reaction.js"
const updateReaction = async (req, res, next)=>{
    try {
        const {_id, ...updateBody} = req.body
      const update = await Reaction.findOneAndUpdate(
        {_id: _id},
        updateBody,
        {new:true}
      )
      return res.status(201).json({
        success: true,
        reaction: update
        })
    } catch (error) {
        
    }
}

export {updateReaction}