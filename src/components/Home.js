import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productData } from "../services/action/DisplayData";

import "./style.css";
import { Button, Card } from "react-bootstrap";
import { addToCart } from "../services/action/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";

const Home = () => {
  const Data = useSelector((state) => state.productsItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productData());
    console.log("Call Api");
  }, []);

  const addToCarts = (pro) => {
    dispatch(addToCart({ pro }));
    toast.success("Product Add To Cart", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  console.log("product", Data.loadPage);

  return (
    <div className="container mt-3">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
                    onClick={() => addToCarts(pro)}
                  >
                    Add To Cart
                  </Button>
                  <NavLink to={"/cardDetail/" + pro.id} className="text-dark">
                    Detail..
                  </NavLink>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={Data.loadPage}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Home;
