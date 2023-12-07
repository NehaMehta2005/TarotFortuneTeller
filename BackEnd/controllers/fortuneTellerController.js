import TarotCard from "../models/fortunTellerSchema.js";

export const fortuneTeller = async (req, res, next) => {
  try {
    
    const allTarotCards = await TarotCard.find({});
    
    if (allTarotCards) {
      res.status(200).json(allTarotCards);
      console.log(allTarotCards);
    } else {
      
      res.status(404).json({ message: 'No Tarot cards found' });
       
    }
  } catch (error) {
   
    next(error);
  }
};
