import Author from "../../models/Author.js"

let allAuthors = async(req, res, next) =>{
    try {
        let all = await Author.find();
        return res.status(200).json({res:all})
    } catch (error) {
        next(error)
    }
}

export {allAuthors}