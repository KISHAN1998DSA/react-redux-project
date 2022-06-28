import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productData } from "../services/action/DisplayData";
import { useEffect } from "react";
import "./style.css";
import { Button, Card } from "react-bootstrap";
import { addToCard } from "../services/action/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productData());
  }, [dispatch]);
  const Data = useSelector((state) => state.productsItems);
  //console.log("product", Data.productData);
  return (
    <div className="container mt-3">
      <ToastContainer />
      <h1 className="text-center">All Products</h1>
      <div className="row d-flex justify-content-center align-items-center ">
        {Data.productData.map((pro, key) => {
          return (
            <>
              <Card style={{ width: "18rem" }} className="mx-2 mt-4 card_style">
                <Card.Img
                  variant="top"
                  src={pro.image}
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
                <Card.Body>
                  <Card.Title>{pro.title.substring(0, 15)}</Card.Title>
                  <Card.Text>Price : {pro.price}</Card.Text>
                  <Button
                    variant="primary"
                    className="text-center mr-3"
                    onClick={()=>dispatch(addToCard({pro}))}
                  >
                    Add To Cart
                  </Button>
                  <NavLink to={"/cardDetail/"+pro.id} className="text-dark">Detail..</NavLink>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
