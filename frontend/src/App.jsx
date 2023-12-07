import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Container from "./context/Container";
import Routing from "./components/mainSection/Routing";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routing />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
