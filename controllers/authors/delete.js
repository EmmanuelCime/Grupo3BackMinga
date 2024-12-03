import Author from "../../models/Author.js";
const deleteOne = async (req, res, next) => {
    try {
        let author = req.body;
        let deleteAuthor = await Author.deleteOne({_id: author._id});
        return res.status(200).json({response:deleteAuthor})
    } catch (error) {
        next(error)
    }
}

export {deleteOne}