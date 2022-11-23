import { Container, Grid, Rating } from "@mui/material";
import Gallery from "./Gallery";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./SingleProduct.scss";

export const SingleProduct = ({ product, setCartQuantity }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <Box className="singleProduct">
      <Container>
        <Grid container spacing={8}>
          <Grid item md={6}>
            <Box className="images">
              <Box className="preview">
                <img
                  src={`/images/product/${product.primaryImage}.png`}
                  alt="preview"
                />
              </Box>
              <Box className="gallery">
                <Gallery images={product.gallery} />
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box className="details">
              <img
                alt="product-primary"
                className="logo"
                src={`/images/${product.logo}.png`}
              ></img>
              <h3 className="title">
                Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
                adipiscing elit.
              </h3>
              <p className="category">{product.category}</p>
              <Box className="rating">
                <Rating name="read-only" value={product.rating} readOnly />
                <span className="number">{product.rating} out of 5</span>
              </Box>
              <Box className="price">
                <span className="final">
                  {product.finalPrice} <span className="currency">LE</span>
                </span>
                {product.onSale && (
                  <>
                    <span className="regular">
                      8,888 <span className="currency">LE</span>
                    </span>
                    <span className="discount">30% off</span>
                  </>
                )}
              </Box>
              <Box className="size">
                <h3>Size</h3>
                <Box className="sizes">
                  {product.sizes.map((size) => (
                    <button key={size}>{size}</button>
                  ))}
                </Box>
              </Box>
              <Box className="color">
                <h3>Color</h3>
                <Box className="colors">
                  {product.colors.map((color, index) => (
                    <img
                      key={index}
                      src={`/images/product/${color}.png`}
                      className={`button  ${index === 0 ? " active" : ""}`}
                      alt="product-primary"
                    />
                  ))}
                </Box>
              </Box>
              <Box className="quantity">
                <h3>Quantity</h3>
                <Box className="inputForm">
                  <button
                    onClick={() =>
                      setQuantity(quantity > 0 ? quantity - 1 : quantity)
                    }
                    className="sub"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="add"
                  >
                    +
                  </button>
                </Box>
              </Box>
              <Box className="actions">
                <button
                  onClick={() => setCartQuantity((prev) => prev + quantity)}
                  className="addToCart"
                >
                  Add To Cart
                </button>
                <button className="pickup">Pickup From Store</button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
