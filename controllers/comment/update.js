import Comment from "../../models/Comment.js"

const updateComment = async (req, res, next)=>{
    try {
      const {_id, ...updateBody} = req.body
      const update = await Comment.findOneAndUpdate(
        {_id: _id},
        updateBody,
        {new:true}
      )
      return res.status(201).json({
        success: true,
        comments: update
        })
    } catch (error) {      
      return next(error)
    }
  }
  export {updateComment}