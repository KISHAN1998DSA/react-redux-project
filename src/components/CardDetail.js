import { Divider } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Rating from "@mui/material/Rating";
import { addToCard } from "../services/action/action";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const CardDetail = () => {
  // debugger
  const dispatch = useDispatch();

  const param = useParams();
  console.log(param, "param");

  const data = useSelector((state) => state.productsItems);

  const pro = data.productData.find((obj) => {
    return obj.id == param.id;
  });


  console.log("CArd Detail", pro);
  return (
    <div>
      <h1 className="text-center mt-3 mb-3">Product Detail</h1>
      <Divider />
      <section className="container mt-4">
        <div className="iteamsdetails">
          <div className="items_img">
            <img src={pro.image} alt="Img" />
          </div>
          <div className="details">
            <Table>
              <tr>
                <td>
                  <p>
                    <strong>Title : </strong> {pro.title}
                  </p>
                  <p>
                    <strong>Category : </strong> {pro.category}
                  </p>
                  <p>
                    <strong>Price : </strong> {pro.price}
                  </p>
                  <p>
                    <strong>Description : </strong> {pro.description.substring(0, 100)}
                  </p>
                  
                </td>
                <td>
                  <p>
                    <strong>Rating : </strong>
                    <Rating
                      name="read-only"
                      value={pro.rating.rate}
                      readOnly
                    />
                  </p>
                  <p>
                    <strong>Reviews : </strong> {pro.rating.count}
                  </p>
                  <p>
                    <strong>Quantity : </strong> {pro.qty}
                  </p>
                  <p>
                  <Button
                    variant="primary"
                    className="text-center mr-3"
                    onClick={()=>dispatch(addToCard({pro}))}
                  >
                    Add To Cart
                  </Button>
                  </p>
                </td>
              </tr>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardDetail;
