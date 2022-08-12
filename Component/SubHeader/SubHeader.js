import { Box, styled } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubHeaderFunction } from "../../Redux/Action/Action";
import HeaderCard from "./HeaderCard";

const BoxMargin = styled("Box")`
  display: flex;
  margin: 55px 50px 0 50px;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
`;

const SubHeader = () => {
  const dispatch = useDispatch();
  const { subheaders } = useSelector((state) => state.flipkart);
  // console.log(subheaders);
  useEffect(() => {
    dispatch(getSubHeaderFunction());
  }, [dispatch]);

  return (
    <BoxMargin variant="outlined" sx={{ boxShadow: 3 }}>
      {subheaders.map((header) => (
        <HeaderCard key={header._id} header={header}></HeaderCard>
      ))}
    </BoxMargin>
  );
};

export default SubHeader;
