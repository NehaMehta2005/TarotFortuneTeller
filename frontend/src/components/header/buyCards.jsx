import React, { useState } from 'react';
  import toast,{ Toaster } from 'react-hot-toast'

  export default function BuyCards() {
    const [quantity, setQuantity] = useState(0);
    const [price] = useState(19.99);
// get user from context

    const handleQuantityChange = (event) => {
      setQuantity(parseInt(event.target.value, 10));
    };
    const handleBuyClick = (e) => {
      e.preventDefault();
      console.log(`Buying ${quantity} product(s)`);
      const totalPrice = quantity * price;
      const data = {
        quantity: quantity,
        totalPrice: totalPrice,
        // userId: user._id 
      };

     fetch("http://localhost:5500/buyCards/createOrder", {
       method: "POST",
      headers: {"Content-Type": "application/json"},
       body: JSON.stringify(data),
     })
      .then(response => {
        console.log(response);
      if (!response.ok) {

          
           throw new Error("Form response was not ok");
        
         } else {
  
         toast.success( `Thank you for your purchase!
        You ordered ${quantity} packages of the cards that costs ${price} $
       You will receive your package within 5 days.`)
      
      
  

       }})
       .catch((err) => {
      toast.error(err.message)
       });
       
   };


  

    //  if (submitted) {
    //   return (
    //       <>
    //      <Toaster position="top-center"/>
    //       <div >Thank you for your purchase!</div>
    //         <p>You ordered {quantity} packages of the cards that costs {price} $</p>
    //       <div >You will receive your package within 5 days.</div>
    //  </>
    //     );}


  
    
    const calculateTotalPrice = () => {
      return quantity * price;
    };





    return (
      <div>
        <form onSubmit={handleBuyClick}>
          <div>
            <h2>Divine Celestial Tarot</h2>
            <p>Printable Tarot / Deck 78 Cards / 3 Back Designs</p>
            <p>Price: $19.99</p>
          </div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>
          <div>
            <label htmlFor="totalPrice">Total Price:</label>
            <input
              type="text"
              id="totalPrice"
              value={calculateTotalPrice()}
              readOnly
            />
          </div>
          <button type="submit">Buy Now</button>
        </form>
        
         <Toaster position="top-center"/>
         
    

      </div>
    );
  }