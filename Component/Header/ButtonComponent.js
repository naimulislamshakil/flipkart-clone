import { Box, Button, styled, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";

const ButtonColor = styled(Button)`
  background: #fff;
  color: black;
  height: 32px;
`;

const BoxFlexComponent = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxFlexCardComponent = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const ButtonComponent = () => {
  return (
    <BoxFlexComponent>
      <ButtonColor variant="contained">Login</ButtonColor>

      <Typography style={{ marginLeft: 20 }}>Become A Seller</Typography>
      <Typography style={{ marginLeft: 20 }}>More</Typography>
      <BoxFlexCardComponent>
        <ShoppingCartIcon />
        <Typography>Card</Typography>
      </BoxFlexCardComponent>
    </BoxFlexComponent>
  );
};

export default ButtonComponent;
