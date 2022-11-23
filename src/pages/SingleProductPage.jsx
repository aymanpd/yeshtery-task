import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ProductBox from "../components/ProductBox";
import { SingleProduct } from "../components/SingleProduct";
import BreadCrumb from "../components/layouts/BreadCrumb";
import { dummyProduct, dummySimilarProduct } from "../services/apis";
const SingleProductPage = ({ setCartQuantity }) => {
  return (
    <Box>
      <BreadCrumb
        path={["Clothing", "Tops", "Adidas", "Adidas Black T-shirt"]}
      />
      <SingleProduct setCartQuantity={setCartQuantity} product={dummyProduct} />
      <Box className="similarProducts">
        <Container>
          <Box className="header">
            <h2 style={{ color: "#542E90", marginBottom: "1rem" }}>
              Similar Products
            </h2>
            <p>You may like these products also</p>
          </Box>
          <Grid container spacing={4}>
            {["Group 575", "Group 583", "Group 589", "Group 597"].map(
              (image) => (
                <Grid key={image} item md={3}>
                  <ProductBox product={{ image, ...dummySimilarProduct }} />
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default SingleProductPage;
