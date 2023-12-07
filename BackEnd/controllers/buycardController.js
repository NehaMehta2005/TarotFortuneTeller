import BuyCards from "../models/buyCardsSchema.js"

export const createOrder = async (req, res, next) => {
    try {
           const cards = await BuyCards.create(req.body);
           
            res.send(cards);
  
    } catch (err) {
      next(err);
    }
  };

  export const deleteOrder = async (req, res, next) => {
    // "/api/orders/singleorder/343v24kh2v3h42jh52" delete
    try {
      const deleteOrder = await BuyCards.findByIdAndDelete(req.params.id);
      res.send(deleteOrder);
    } catch (err) {
      next(err);
    }
  };
  
  