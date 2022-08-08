import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const HeaderStyle = styled(AppBar)`
  background: #2874fo;
  height: 55px;
`;

const BoxComponent = styled(Box)`
  margin-left: 10%;
  line-height: 0;
`;

const SubtittleComponent = styled(Typography)`
  font-size: 10px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Toolbar>
        <BoxComponent>
          <Image
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt=""
            height="25"
            width="100"
          />
          <Box>
            <SubtittleComponent>Explore Plus</SubtittleComponent>
          </Box>
        </BoxComponent>
      </Toolbar>
    </HeaderStyle>
  );
};

export default Header;
