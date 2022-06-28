import { Button, Container, Nav, Navbar, Table } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { delete_item } from "../services/action/action";
import { addToCard,removeCartItem } from "../services/action/action";
import { useMemo, useState } from "react";

const Header = () => {

  const getdata = useSelector((state) => state.cardItems.cardData);
  console.log("Header", getdata);
  //Data Dispatch
  const dispatch = useDispatch();
  //oioas
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //Remove Quantity
  const removeCart=(cartId)=>{
    dispatch(removeCartItem(cartId));
  }

  //Delete Items
  const del = (id) => {
    dispatch(delete_item(id));
  };

  //Total Price

  const total = useMemo(() => {
    // let price = 0;
    // getdata.map((e) => {
    //   price = price + e.price;
    // });
    // return price

    return getdata.reduce((total, dt) => {
      return total + dt.price *dt.qty;
    }, 0);
  
  },[getdata]);


  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-light text-decoration-none">
            All Product
          </NavLink>

          <Nav class Name="me-auto">
            <NavLink
              to="/cardDetail"
              className="text-light text-decoration-none"
            >
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <ShoppingCartIcon
              className="text-light "
              style={{ fontSize: 30, cursor: "pointer" }}
            ></ShoppingCartIcon>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Product Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((pro) => {
                    if(pro.qty!==0){
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink
                              to={`/cardDetail/${pro.id}`}
                              onClick={handleClose}
                            >
                              <img
                                src={pro.image}
                                style={{ width: "5rem", height: "5rem" }}
                                alt=""
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{pro.title}</p>
                            <p>Price : ₹{pro.price * pro.qty}</p>
                            <p>Quantity : {pro.qty}</p>
                          </td>

                          <td
                            className="mt-5 ml-3" style={{width:"100px"}}>
                            <p><DeleteIcon style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }} onClick={() => del(pro.id)}></DeleteIcon>
                            </p>
                            <p>
                            <Button className="btn btn-dark" size="sm" 
                             onClick={()=>removeCart(pro.id)}
                            >-</Button>
                             <strong> {pro.qty} </strong>
                             <Button className="btn btn-dark" size="sm"
                               onClick={()=>dispatch(addToCard({pro}))}
                             >+</Button>
                            </p>
                          </td>
                        </tr>
                      </>
                    );
                    }})}
                    <tr>
                      <td colSpan="3">
                  <p className="text-left">Total :₹ {total.toFixed(3)}</p>
                  </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <CloseIcon
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></CloseIcon>
              <p style={{ fontSize: 22 }}>Your carts is empty</p>
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
