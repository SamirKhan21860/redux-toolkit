import React from "react";
import { useTheme } from "@mui/material/styles";
import Title from "../Title/Title";
import { LineChart, axisClasses } from "@mui/x-charts";

const Chart = () => {
  const theme = useTheme();

  function createData(time, amount) {
    return { time, amount: amount ?? null };
  }

  const data = [
    createData("00:00", 0),
    createData("03:00", 300),
    createData("06:00", 600),
    createData("09:00", 800),
    createData("12:00", 1500),
    createData("15:00", 2000),
    createData("18:00", 2400),
    createData("21:00", 2400),
    createData("24:00"),
  ];

  return (
    <React.Fragment>
      <Title>Title</Title>
      <div style={{ width: "100%", flexGrow: 1, overflow: "hidden" }}>
        <LineChart dataset={data} />
      </div>
    </React.Fragment>
  );
};

export default Chart;
