import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const BannerCard = ({ banner }) => {
  return (
    <Box>
      <Image src={banner.url} alt="" width="1000" height="250"></Image>
    </Box>
  );
};

export default BannerCard;
