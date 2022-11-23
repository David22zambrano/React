import * as React from "react";

import Header from "../layout/Header";
import Chips from "../components/Chips";
import Cards from "../components/Cards";

import { Divider } from "@mui/material";
import CardError from "../components/CardError";
import TabComponent from "../components/Tabs";
const Home = () => {
  return (
    <>
      <Header />
      <Chips />
      <CardError />
      <Divider />
      <Cards />
      <Divider />
      <CardError />
      <Divider />
      <Cards />
      <Divider />
      <Cards />
      <Divider />
      <Cards />
      <Divider />
      <CardError />
      <Divider />
    </>
  );
};

export default Home;
