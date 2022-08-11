import { Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubHeaderFunction } from "../../Redux/Action/Action";

const SubHeader = () => {
  const dispatch = useDispatch();
  const { subheaders } = useSelector((state) => state.flipkart);
  // console.log(subheaders);
  useEffect(() => {
    dispatch(getSubHeaderFunction());
  }, [dispatch]);

  return (
    <Box style={{ marginTop: 55 }}>
      {subheaders.map((header) => (
        <li key={header._id}>{header.text}</li>
      ))}
      <h2>This is Sub Header</h2>
    </Box>
  );
};

export default SubHeader;
