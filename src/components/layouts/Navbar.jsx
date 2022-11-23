import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <Box className="navbar">
      <Container>
        <ul className="links">
          <li>
            <a href="/#">men</a>
          </li>
          <li>
            <a href="/#">women</a>
          </li>
          <li>
            <a href="/#">unisex</a>
          </li>
          <li>
            <a href="/#">kids</a>
          </li>
          <li>
            <a href="/#">best seller</a>
          </li>
          <li>
            <a href="/#">new arrivals</a>
          </li>
          <li>
            <a color="#F11133" href="/#">
              offers
            </a>
          </li>
        </ul>
      </Container>
    </Box>
  );
};

export default Navbar;
