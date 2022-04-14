import React from "react";

import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyles} from './globalStyles'
import Hero from './Hero/Hero';
import Products from "./components/Products/Products";
import {productData, productDataTwo} from "./components/Products/data"
import Feature from "./components/Feature/Feature";
import Footer from './components/Foote/Foote'
function App() {
  return (
    <Router>
      <GlobalStyles />
    
      <Hero />
      <Products heading ='Trà Sữa Hot' data = {productData} />
      <Feature />
      <Products heading ='Trà TRai Cay' data = {productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
