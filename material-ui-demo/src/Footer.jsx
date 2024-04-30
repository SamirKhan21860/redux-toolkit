import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: "#fcfcfc",
          padding: "50px",
        }}
      >
        <Typography variant="h6" align="center" >
            Footer
        </Typography>
        <Typography variant="subtitle1" align="center">
            Something here to give the footer a purpose!
        </Typography>
      </footer>
    </>
  );
};

export default Footer;
