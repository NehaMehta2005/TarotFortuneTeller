import {Schema, model} from "mongoose";

const imageSchema = new Schema({
  filename: String,
  data:Buffer
   
});

const Image = model('Image', imageSchema);

export default Image;