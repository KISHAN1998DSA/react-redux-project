import React from "react";
import "./style.css";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../services/action/action";

const ProductItem = ({
  productTitle,
  productPrice,
  productImage,
  productCat,
  productId,
}) => {

  const dispatch=useDispatch();
  return (
    <>
      <Card style={{ width: "18rem" }} className="mx-2 mt-4 card_style">
        <Card.Img
          variant="top"
          src={productImage}
          style={{ height: "16rem" }}
          className="mt-3"
        />
        <Card.Body>
          <Card.Title>{productTitle.substring(0, 15)}</Card.Title>
          <Card.Text>Price : {productPrice}</Card.Text>
          <Button variant="primary" className="text-center" onClick={() => dispatch(addToCart({productId}))}>
            Add To Card
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductItem;
