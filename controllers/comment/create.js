import Comment from "../../models/Comment.js"

const createComment = async (req, res, next) =>{
    try {
        const comment = await Comment.create(req.body)
        const infoComent = await Comment.findById(comment._id).populate("authorId", "name photo").populate("companyId", "name photo").exec()
        
        return res.status(201).json({
            success: true,
            comment: infoComent
        })
    } catch (e) {
        console.log(e);
        
        next(e)
    }
}
export {createComment}