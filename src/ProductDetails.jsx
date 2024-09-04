import React from 'react'
import { useParams } from 'react-router-dom'
import "./App.css";

function ProductDetails({apiArr, addToCart}) {
const {id} = useParams()   // 6
    const findData = apiArr.find((item) => item.id == id )   /// 6 
    
  return (
    <>
   <div className="details-card">
  <img src={findData.image} alt={findData.title} className="details-image" />
  <div className="details-content">
    <h1 className="details-title">Name: {findData.title}</h1>
    <h1 className="details-price">Price: ${findData.price}</h1>
    <h1 className="details-description">Description: {findData.description}</h1>

    <button onClick={() => addToCart(findData)} style={{cursor: 'pointer', padding: '10px'}}>Add to Cart</button>

  </div>
</div>
    
    </>
  )
}

export default ProductDetails