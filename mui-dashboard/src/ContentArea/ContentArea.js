import React from "react";
import { Typography, Grid, Paper } from "@mui/material";

const ContentArea = () => {
  return <Grid container spacing={2}>
    <Paper elevation={3}>
        <Typography variant="h6">Paper</Typography>
    </Paper>
  </Grid>;
};

export default ContentArea;
