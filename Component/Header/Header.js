import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ButtonComponent from "./ButtonComponent";
import Search from "./Search";

const HeaderStyle = styled(AppBar)`
  background: #2874fo;
  height: 55px;
`;

const BoxComponent = styled(Box)`
  margin: 10% 10%;
  line-height: 0;
`;

const SubtittleComponent = styled(Typography)`
  font-size: 10px;
  text-align: center;
`;

const BoxFlexComponent = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageMarginLeft = styled("img")({
  marginLeft: 5,
  width: 10,
  height: 10,
});

const ButtonComponentBox = styled(Box)`
  margin-left: 4%;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Toolbar style={{ minHeight: 55 }}>
        <BoxComponent>
          <Image
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="Logo"
            height="25"
            width="100"
          />
          <BoxFlexComponent>
            <SubtittleComponent>Explore Plus</SubtittleComponent>
            <ImageMarginLeft
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt="subLogo"
            />
          </BoxFlexComponent>
        </BoxComponent>
        <Search />
        <ButtonComponentBox>
          <ButtonComponent />
        </ButtonComponentBox>
      </Toolbar>
    </HeaderStyle>
  );
};

export default Header;
