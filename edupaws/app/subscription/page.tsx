import React from "react";
import NavBar from "../home/navBar";
import SubcriptionBox from "./subscriptionBox";

const subscriptionPage = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="font-bold text-violet-900 text-3xl mb-10 pt-20">
            Plans & Pricing
          </h1>
        </div>
        <SubcriptionBox />
      </div>
    </div>
  );
};

export default subscriptionPage;
