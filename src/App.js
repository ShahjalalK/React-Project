import react, { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/HeroSection/Hero';
import { Product } from './Components/ProductSection/Product';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/FooterSection/Footer';
import { CopyRight } from './Components/CopyRight/CopyRight';
const App = () => {  
  return (
    <BrowserRouter> 
     <GlobalStyle />
     <Navbar /> 
     <Hero /> 
     <Product />
     <Contact />
     <Footer />
     <CopyRight />
      <Switch>       
      </Switch>
    </BrowserRouter>
  )

}

export default App;
