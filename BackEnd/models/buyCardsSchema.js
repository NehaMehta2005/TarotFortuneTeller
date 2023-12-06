import {Schema, model} from "mongoose";

const BuyCardsSchema = new Schema({
  quantity: {type:Number},
  totalPrice: {type: Number, required: true},
  // userId: {type: Schema.Types.ObjectId,ref:"User" ,required: true},
});

const BuyCards = model("BuyCards", BuyCardsSchema);

export default BuyCards;