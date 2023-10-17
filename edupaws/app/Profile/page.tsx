"use client";
import React from "react";
import NavBar from "../homeComponent/navBar";
import ProfileContainer from "./profileContainer/profileContainer";
import SummaryTab from "./performanceSummary/summaryTab";

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
