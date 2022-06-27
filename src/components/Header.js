import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { MenuItem } from "@mui/material";
import "./style.css";
import { Button, Card } from "react-bootstrap";

const Header = () => {
  const cardNo = useSelector((state) => state.cardItems);
  console.log("Header", cardNo);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-light text-decoration-none">
            Add To Card
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
            badgeContent={cardNo.cardData.length}
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
          <MenuItem>
            <div className="row d-flex justify-content-center align-items-center ">
              {cardNo.cardData.map((pro, key) => {
                return (
                  <>
                    <Card.Img
                      variant="top"
                      src={pro.image}
                      style={{ height: "5rem", width: "5rem" }}
                    />
                    <Card style={{ width: "5rem" }}>
                      <Card.Body>
                        <Card.Title>{pro.title.substring(0, 15)}</Card.Title>
                        <Card.Text>Price : {pro.price}</Card.Text>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
            </div>
          </MenuItem>
          <CloseIcon
            onClick={handleClose}
            style={{ cursor: "pointer" }}
          ></CloseIcon>
          {cardNo.cardData.length ? (
            <div></div>
          ) : (
            <div>
              <span>Your Cart is empty</span>
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
