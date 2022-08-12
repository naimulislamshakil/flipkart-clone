import { Box, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import style from "../../styles/headecard.module.css";

const HeaderCard = ({ header }) => {
  const { url, text } = header;
  return (
    <Box>
      <Box>
        <Image src={url} alt="" width="100" height="90"></Image>
        <p className={style.center}>{text}</p>
      </Box>
    </Box>
  );
};

export default HeaderCard;
