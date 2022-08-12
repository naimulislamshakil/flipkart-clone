import { Box, styled } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getBannerFunction } from "../../Redux/Action/Action";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.flipkart);
  useEffect(() => {
    dispatch(getBannerFunction());
  }, [dispatch]);
  return (
    <Box style={{ margin: 10 }}>
      <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
    </Box>
  );
};

export default Banner;
