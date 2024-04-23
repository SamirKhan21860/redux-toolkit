import React from "react";
import { useAppSelector } from "../redux/hooks/hook";

const MyComp: React.FC = () => {
  const count = useAppSelector((state) => state.counter);

  return (<h1>MyComp: {count}</h1>);
};

export default MyComp;
