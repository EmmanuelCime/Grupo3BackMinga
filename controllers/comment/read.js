import Comment from "../../models/Comment.js"
import "../../models/Author.js"
import "../../models/Company.js"

const allComment = async (req, res, next) =>{
    try {
        const comment = await Comment.find().populate("authorId", "name photo").populate("companyId", "name photo").exec()
        return res.status(200).json({
            success: true,
            comment: comment
        })
    } catch (error) {
        next(error)
    }
}

const commentByChapter = async (req, res, next)=>{
    try {
        const idChapter = req.params.chapter
        const comment = await Comment.find({chapterId: idChapter}).populate("authorId", "name photo").populate("companyId", "name photo").exec()
        return res.status(201).json({
            success: true,
            comment: comment
        })
    } catch (error) {
        next(error)
    }
}
export {allComment, commentByChapter}