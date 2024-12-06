import { Schema, model } from "mongoose";

let collection = "reactions"
let schema = new Schema({
    mangaId: {type:Schema.Types.ObjectId, ref:"mangas", required:true},
    authorId: {type:Schema.Types.ObjectId, ref:"authors"},
    companyId:{type:Schema.Types.ObjectId, ref:"companies"},
    reaction: {type:Number, required:true}
})

let Reaction = model(collection, schema);

export default Reaction