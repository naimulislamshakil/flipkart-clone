import { Box, InputBase } from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const InputBox = styled(Box)`
  background: #fff;
  margin-left: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBaseComponent = styled(InputBase)`
  width: 350px;
  padding-left: 10px;
  font-size: 15px;
`;

const BoxSearchComponent = styled(Box)`
  color: blue;
  padding: 5px;
`;

const Search = () => {
  return (
    <InputBox>
      <InputBaseComponent placeholder="Search Product, Catagorey and Brands" />
      <BoxSearchComponent>
        <SearchIcon style={{}} />
      </BoxSearchComponent>
    </InputBox>
  );
};

export default Search;
