import React from "react";
import { Grid } from "@mui/material";
import Chart from "../Chart/Chart";

const ContentArea = () => {
  return <Grid container spacing={2}>
    <Grid item xs={12}>
      <Chart />
    </Grid>
  </Grid>;
};

export default ContentArea;
