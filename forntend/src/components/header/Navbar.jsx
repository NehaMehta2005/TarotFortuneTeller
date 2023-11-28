import React from 'react'
import { BrowserRouter,Routes,  Route, Link } from 'react-router-dom';
import AboutTarot from "./AboutTarot"

function Navbar() {
  return (
 <div>
   <BrowserRouter BrowserRouter>
   
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/AboutTarot">Everything about Tarot</Link></li>
      <li><Link to="/yourFortuneTeller">your Tarot fortune teller</Link></li>
      <li><Link to="/buyCards">buy the Tarot cards</Link></li>
      <li><Link to="/contactUs">Contact us</Link></li>
      </ul>
 

  <Routes>
  <Route path="/" />
  <Route path="/AboutTarot" element={<AboutTarot/>}/>
  <Route path="/yourFortuneTeller"/>
  <Route path="/buyCards"/>
  <Route path="/contactUs"/>
  </Routes>
  
   </BrowserRouter>
</div> 
  )
}

export default Navbar