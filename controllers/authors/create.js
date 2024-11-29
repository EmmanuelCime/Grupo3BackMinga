import { response } from "express";
import Author from "../../models/Author.js";

let create = async(req, res, next) => {
    try{
        let author = req.body;
        let newAuthor = await Author.create(author);

        return res.status(201).json({response: newAuthor});
    } catch (error){
        next(error)
    }
}

export {create}