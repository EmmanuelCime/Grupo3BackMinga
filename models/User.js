import { Schema, model } from "mongoose";

let collection = 'users';

//rol 0 usuario normal
//rol 1 usuario author
//rol 2 usuario compania
//rol 3 usuario admin

let schema = new Schema({
  email: {type:String, required: true},
  password: {type:String, required: true},
  photo: {type: String, required: true},
  role:{type:Number, default:0},
  online: {type: Boolean},
  sendEmail: {type: Boolean, default:true}
}, {
  timeseries:true
});

let User =  model(collection, schema);
export default User;