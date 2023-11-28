import React from "react";
import { Home } from "../components/Home";
import "../css/home.css";

export const HomePage = () => {
  return (
    <div>
      <h1 className="homeHeader"> Home </h1>
      <Home />
    </div>
  );
};
