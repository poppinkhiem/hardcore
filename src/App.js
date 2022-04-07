import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "antd/dist/antd.css";
import { PrivateRoute, Routes, Route } from "react-router-dom";

import Setting from "./pages/Setting";
import Card from "./pages/Card";
import Login from "./components/Login";
import Transaction from "./pages/Transaction";

import Home from "./pages/Home";
import Tables from "./components/Tables";
import { Layout, Content } from "antd";
import { Router } from "express";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

function App() {
  <Login />;

  return (
    <>
      <Router>
        <Login />
        {/* <div style={{ display: "flex" }}> */}
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Tables />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/card" element={<Card />} />
          <Route path="/signup" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
