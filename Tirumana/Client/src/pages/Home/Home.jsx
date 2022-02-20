import React from "react";
import Realwedding from "../../Realwedding";
import Exportteam from "../Exportteam";
import Features from "../Features";
import Feedbackcustomer from "../Feedbackcustomer";
import Ideastips from "../Ideastips";
import Location from "../Location";
import Newsupdate from "../Newsupdate";
import Slider from "../Slider";
import Vendorservices from "../Vendorservices";
import Weddinglist from "../Weddinglist";
import Weddingvender from "../Weddingvender";

export default function Home() {
  return (
    <>
      <Slider/>
      <Features/>
      <Weddinglist/>
      <Weddingvender/>
      <Location/>
      <Realwedding/>
      <Vendorservices/>
      <Feedbackcustomer/>
      <Exportteam/>
      <Newsupdate/>
      <Ideastips/>
    </>
  );
}
