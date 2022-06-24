import React from "react";

const Home = (props) => {
    //console.log("props",props);
  return (
    <div>
      <div className="icon-wrapper">
        <img
          src="https://www.seekpng.com/png/full/116-1169969_png-file-svg-add-to-cart-icon-png.png"
          alt="add to card"
          width={100}
        />
      </div>
      <h1>Home components</h1>
      <div className="card-wrapper">
        <div className="img-wrapper">
          <img
            width="400"
            alt="Imag"
            src="https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Image.png"
          />
        </div>
        <div className="detail-wrapper">
          <span>I-Phone 12 pro</span>
          <br />
          <span>$1200</span>
        </div>
        <div className="btn-wrapper">
          <button onClick={()=>props.addToCardHandler({price:1000,name:'Iphone 12'})}> Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
