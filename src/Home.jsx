import React from "react";
import { Link } from "react-router-dom";
function Home({apiArr}) {

  return (
    <>
      <div className="card-container">
        {apiArr.map((i) => (
          <div key={i.id} className="card">
            <img src={i.image} alt={i.title} className="card-image" />
            <div className="card-content">
              <h1 className="card-title">{i.title}</h1>
              <h1 className="card-price">${i.price}</h1>
            </div>
            <Link to={`/detail/${i.id}`}><button className="card-button">see more</button></Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
