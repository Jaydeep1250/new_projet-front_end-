import React from "react";
import "./App.css";

import Header from "./Components/Layout/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Components/User/Login";
import Enduserregistersignup from "./Components/User/Enduserregistersignup";
import Resetpassword from "./Components/User/Resetpassword";
import Dashboard from "./Components/InnerPages/Dashboard";

import DashboardNav from "./Components/Layout/DashboardNav";

function App() {
  // routes of all pages

  if (sessionStorage.getItem("user")) {
    return (
      <>
        <DashboardNav />
        <Router>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-up" element={<Enduserregistersignup />} />
            <Route path="/resetpassword" element={<Resetpassword />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
