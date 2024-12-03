import { Schema, model } from "mongoose";

let collection = 'authors'

let schema = new Schema({
    name:{type:String, required:true},
    lastName:{type:String}, 
    city:{type:String, required:true},
    country:{type:String, required:true},
    dateBorn:{type:String},
    photo:{type:String, required:true},
    userId:{type:Schema.Types.ObjectId, ref: "users", required: true}, 
    active:{type:Boolean, required:true}
}, {
    timeseries:true
})

let Author = model(collection, schema)

export default Author;

