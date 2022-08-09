import { Box } from "@mui/material";
import React from "react";
import Header from "../Component/Header/Header";

const card = () => {
  return (
    <div>
      <Header></Header>
      <Box style={{ marginTop: 55 }}>
        <h2>This Is Card</h2>
      </Box>
    </div>
  );
};

export default card;
