import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { addToCard } from "../services/action/action";


const Home = () => {
  const dispatch=useDispatch();
  const _apiData = useSelector((state) => state.cardItems);
    console.log("home",_apiData);
  return (
    <div>
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
          {/* <button onClick={()=>props.addToCardHandler({price:1000,name:'Iphone 12'})}> Add To Card</button> */}
          <button onClick={()=>dispatch(addToCard({price:1000,name:'Iphone 12'}))}> Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
