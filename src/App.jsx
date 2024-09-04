import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AddToCart from "./AddToCart";

function App() {
  const [apiArr, setApiArr] = useState([]);

   async function add(){
   await fetch("https://fakestoreapi.com/products")   
    .then((res) => res.json()) 
    .then((json) => setApiArr(json)) 
    .catch(() => {
      console.log("Error in fetching ");
    }); 
  }

  console.log(apiArr);
  


    useEffect(() => {
      add();
    },[])   


    // cart functionality 

    const [cart , setCart] = useState([]);
    
    const addToCart = (prod) => {
      // Add product to cart
      const updatedCart = [...cart, prod];
      setCart(updatedCart);
    };

    console.log('abcdhjfh', cart);
    

    
  return(
    <>

    <BrowserRouter>
    <Navbar/> 
    <Routes>
      <Route path="/" element={<Home apiArr={apiArr}/>} />
      <Route path="/detail/:id" element={<ProductDetails apiArr={apiArr} addToCart={addToCart}/>} />
      <Route path="/add-to-cart" element={<AddToCart cart={cart}/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>


    </>
  )
}

export default App;
