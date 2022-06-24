
import React from "react";

const Home = (props) => {
    console.log("Header",props.data);
  return (
    <div>
      <div className="icon-wrapper">
        <span className="count-wrapper">{props.data.length}</span>
        <img
          src="https://www.seekpng.com/png/full/116-1169969_png-file-svg-add-to-cart-icon-png.png"
          alt="add to card"
          width={100}
        />
      </div>
    </div>
  );
};

export default Home;
