<<<<<<< HEAD
import { Schema, model } from "mongoose"

const collection = "comments"

const schema = new Schema({
    chapterId: {type: Schema.Types.ObjectId, ref: "chapters", required:true},
    authorId: {type: Schema.Types.ObjectId, ref: "authors"},
    companyId: {type: Schema.Types.ObjectId, ref: "companies"},
    message:{type: String, required:true}
}, {
    timestamps: true
})

const Comment = model(collection, schema)
export default Comment
=======
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
>>>>>>> 605d59aeae6d48a712537de8900aac6cc1df40e6
