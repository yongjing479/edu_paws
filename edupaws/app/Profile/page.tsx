"use client";
import React from "react";
import NavBar from "../home/navBar";
import ProfileContainer from "./profileContainer/profileContainer";
import SummaryTab from "./performanceSummary/summaryTab";
import { Button } from "antd";

function page() {
  return (
    <div>
      <NavBar />
      <ProfileContainer />
      <SummaryTab />
    </div>
  );
}

export default page;
