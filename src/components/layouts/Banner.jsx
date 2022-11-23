import { Box } from "@mui/system";
import "./Banner.scss";
import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalkOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Container } from "@mui/material";

const Banner = () => {
  return (
    <Box className="topBanner">
      <Container>
        <div className="bannerContent">
          <img src="/images/Group 770.svg" alt="nav" />
          <Box className="sideTap">
            <img alt="logo" src="/images/brand_logo_black.svg" />
          </Box>
          <Box className="offerText">
            <ArrowBackIosNewOutlinedIcon
              style={{ marginRight: 9, fontSize: 15, verticalAlign: "middle" }}
            />
            Valentine's day offers! Buy two get one free{" "}
            <a
              style={{ textDecoration: "underline", fontWeight: "bold" }}
              href="/#"
            >
              shop now
            </a>
            <ArrowForwardIosOutlinedIcon
              style={{ marginLeft: 9, fontSize: 15, verticalAlign: "middle" }}
            />
          </Box>
          <Box className="icons">
            <Box className="iconContainer">
              <a href="/#">
                <PhoneInTalkIcon /> Contact us
              </a>
            </Box>
            <Box className="iconContainer">
              <a href="/#">
                <ShoppingCartOutlinedIcon /> Track Order
              </a>
            </Box>
            <Box className="iconContainer">
              <a href="/#">
                <LocationOnOutlinedIcon /> Find A Store
              </a>
            </Box>
          </Box>
        </div>
      </Container>
    </Box>
  );
};

export default Banner;
