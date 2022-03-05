import React from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home/Home";
import Vendors from "./pages/Vendors/Vendors";
import SignIn from "./pages/auth/SignIn";
import Signup from "./pages/auth/Signup";
import Header from "./pages/Header";

function Router() {
  return (
    <>  
      <Header />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/vendors" exact element={<Vendors />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default Router;
