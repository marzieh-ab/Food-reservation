import React from "react";
import { Route, Routes } from "react-router-dom";
import WebLayOut from "./Components/WebLayOut";
import Login from "./Components/Login";
import Confrim from "./Components/Confrim";
import FurtherInformation from "./Components/FurtherInformation";
// import OrderFactor from './Components/OrderFactor';
import Verificationcode from "./Components/Verificationcode";
import Sms from "./Components/Sms";

import Wallet from "./Components/Wallet";

import "./App.css";

import OrderFactor from "./Components/OrderFactor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WebLayOut />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confrim" element={<Confrim />} />
      <Route path="/information" element={<FurtherInformation />} />
      <Route path="/factor" element={<OrderFactor />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/verificationcode" element={<Verificationcode />} />
      <Route path="/sms" element={<Sms />} />
    </Routes>
  );
}

export default App;
