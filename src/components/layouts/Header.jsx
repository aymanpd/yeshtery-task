import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Container } from "@mui/system";
import "./Header.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import TemporaryDrawer from "../Drawer";
const Header = ({ cartQuantity }) => {
  return (
    <Box className="header">
      <Container>
        <Box className="headerContent">
          <form className="search">
            <button className="searchIcon">
              <SearchIcon />
            </button>
            <input type="text" placeholder="Search" />
          </form>
          <Box className="logo">
            <img src="/images/adidas-logo.png" alt="product-primary" />
          </Box>
          <Box className="icons">
            <TemporaryDrawer cartQuantity={cartQuantity} />
            <Box className="iconContainer">
              <a href="/#">
                <FavoriteBorderOutlinedIcon /> Wishlist
              </a>
            </Box>
            <Box className="iconContainer">
              <a href="/#">
                <Person2OutlinedIcon /> Login
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
