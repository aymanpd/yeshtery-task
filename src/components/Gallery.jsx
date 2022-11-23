import React from "react";
import Carousel from "react-grid-carousel";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Box } from "@mui/system";
import "./Gallery.scss";

const Gallery = ({ images }) => {
  return (
    <Box className="gallery">
      <Carousel
        cols={4}
        rows={1}
        gap={10}
        arrowLeft={
          <Box className="galleryArrow back">
            <ArrowBackIosNewOutlinedIcon />
          </Box>
        }
        arrowRight={
          <Box className="galleryArrow forward">
            <ArrowForwardIosOutlinedIcon />
          </Box>
        }
      >
        {images.map((image) => (
          <Carousel.Item key={image}>
            <img
              width="100%"
              src={`/images/product/${image}.png`}
              alt="product"
            />
          </Carousel.Item>
        ))}
        <Carousel.Item>
          <img
            alt="test"
            width="100%"
            src="https://picsum.photos/800/600?random=2"
          />
        </Carousel.Item>
      </Carousel>
    </Box>
  );
};

export default Gallery;
