import { Schema, model } from "mongoose";

let collection = 'comments';
let schema = new Schema({
    chapterId:{type:Schema.Types.ObjectId, ref: "chapters" ,required: true},
    authorId:{type:Schema.Types.ObjectId, ref: "authors" },
    companyId:{type:Schema.Types.ObjectId, ref: "companies"},
    message: {type:String, required:true}
})

let Comment = model(collection, schema);
export default Comment;