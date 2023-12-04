
import React, { useState } from 'react';
export default function BuyCards() {
    const [quantity, setQuantity] = useState(1);
    const [price, setprice]=useState(19.99)

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value, 10));
      };

      const handleBuyClick = () => {
        // Handle the buy action (e.g., integrate with payment gateway, update backend)
        console.log(`Buying ${quantity} product(s)`);
        // Add your logic for processing the purchase here
      };

//       const finalPrice=()=>{
// setprice(quantity*19.99)
//       }
  return (
    <div>
   <div >
      <div >
        <h2>Divine Celestical Tarot </h2>
        <p>Printable Tarot / Deck78 Cards/ 3Back Design</p>
        <p>Price: 19.99$</p>
        
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
        {/* <div>
        <label htmlFor="finalprice">Final Price:</label>
        <input type="number" id="finalprice" value="finalprice" onChange={finalPrice} />
     </div>  */}
     </div>
      <button onClick={handleBuyClick}>
        Buy Now
      </button>
    </div>

    </div>
  )
}
