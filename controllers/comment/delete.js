import Comment from "../../models/Comment.js"

const deletedOneComment = async (req,res,next) =>{
    try {
        const deletedComment = await Comment.deleteOne({_id: req.body._id})
        return res.status(200).json({
            success: true,
            deletedComment: deletedComment
        })
    } catch (error) {
        next(error)
    }
}

export {deletedOneComment}