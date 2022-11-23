import { Rating } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./ProductBox.scss";

const ProductBox = ({ product }) => {
  return (
    <Box className="productBox">
      <img
        className="preview"
        src={`/images/product/${product.image}.png`}
        alt="product-primary"
      />
      <h4 className="name">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </h4>
      <Box className="details">
        <Box className="price">
          <span className="final">
            9,999 <span className="currency">LE</span>
          </span>
          <span className="regular">
            8,888 <span className="currency">LE</span>
          </span>
          <span className="discount">30%</span>
        </Box>
        <img alt="" className="logo" src="/images/adidas-logo.png" />
      </Box>
      <Box className="rating">
        <Rating name="read-only" value={4} readOnly />
        <span className="number">4 out of 5</span>
      </Box>
      <p className="pickup">
        Pickup From: <span>Genena Mall</span>
      </p>
    </Box>
  );
};

export default ProductBox;
