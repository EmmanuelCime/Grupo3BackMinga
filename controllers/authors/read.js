import Author from "../../models/Author.js";

let allAuthors = async(req, res, next) => {
    try {
        let all = await Author.find();
        return res.status(200).json({authors:all})
    } catch (error) {
        next(error)
    }
}

let authorId = async(req, res, next) => {
    try {
        let authorId = req.params.id;
        let author = await Author.findById(authorId); 
        return res.status(200).json({
            response: author
        })
    } catch (error) {
        next(error)
    }
}

let authorByUserId = async(req, res, next) => {
    try {
        let userId = req.params.id;
        let author = await Author.find({userId: userId});
        return res.status(200).json({response: author})
    } catch (error) {
        next(error)
    }
}

export  {allAuthors, authorId, authorByUserId}