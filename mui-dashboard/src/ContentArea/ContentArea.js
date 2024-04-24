import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper"

const ContentArea = () => {
  return <Grid container spacing={2}>
    <Paper>
        <Typography variant="h6">Paper</Typography>
    </Paper>
  </Grid>;
};

export default ContentArea;
