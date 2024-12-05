import Comment from "../../models/Comment.js"

const createComment = async (req, res, next) =>{
    try {
        const comment = await Comment.create(req.body)
        return res.status(201).json({
            success: true,
            comment: comment
        })
    } catch (e) {
        next(e)
    }
}
export {createComment}