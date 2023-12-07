import {Schema, model} from "mongoose";

// Define a schema for the tarot cards
const TarotCardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  upright: {
    type: String,
    required: true,
  },
  reversed: {
    type: String,
    required: true,
  },
  yes_or_no: {
    type: String,
    required: true,
  },
  imageUrl:{
    type: String,
    required: true,
  },
  tarotUrl:{
    type: String,
    required: true,
  }

});


const TarotCard = model('TarotCard', TarotCardSchema);
export default TarotCard;
