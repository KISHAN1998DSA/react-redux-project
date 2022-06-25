import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const cardNo = useSelector((state) => state.cardItems);
  console.log("Header", cardNo);
  return (
    <div>
      <div className="icon-wrapper">
        <span className="count-wrapper">{cardNo.length}</span>
        {/* <span className="count-wrapper">{props.data.length}</span> */}
        <img
          src="https://www.seekpng.com/png/full/116-1169969_png-file-svg-add-to-cart-icon-png.png"
          alt="add to card"
          width={100}
        />
      </div>
    </div>
  );
};

export default Header;
