"use client";
import React from "react";
import NavBar from "../homeComponent/navBar";
import ProfileContainer from "./profileContainer/profileContainer";
import SummaryContainer from "./performanceSummary/summaryTab";

function page() {
  return (
    <div>
      <NavBar />
      <ProfileContainer />
      <SummaryContainer />
    </div>
  );
}

export default page;
