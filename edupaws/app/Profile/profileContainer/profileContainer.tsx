import React from "react";
import { useState } from "react";
import {
  EditOutlined,
  StarOutlined,
  ManOutlined,
  BankOutlined,
} from "@ant-design/icons";
import Link from "next/link";

function profileCointainer() {
  return (
    <div className="flex flex-row items-center bg-purple-800 px-8 py-8 relative">
      <div className="home-content gap-3 flex flex-row items-center justify-center ml-10">
        <div className="w-1/5 aspect-square relative">
          <img
            className="w-full h-full rounded-full border-2 border-purple-200 mr-5 object-cover"
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=640&amp;h=320&amp;q=80"
          />
        </div>
        <div className="flex flex-col pl-5">
          <div className="font-bold text-3xl mb-3 text-white">
            <h1 className="mx-auto">David Teo</h1>
          </div>

          <div className="font-lg text-l text-white items-center">
            <div className="flex flex-row gap-3 ">
              <ManOutlined className="text-amber-300 ml-2" />
              <p>Male</p>
            </div>

            <div className="flex flex-row gap-3 ">
              <BankOutlined className="text-amber-300 ml-2" />
              <p>Form 1</p>
            </div>

            <div className="flex flex-row gap-3 ">
              <img src="paws.png" className="text-amber-300 ml-1 w-5 h-5" />
              <p>Baddie (Level 1)</p>
            </div>

            <div className="flex flex-row gap-3 ">
              <StarOutlined className="text-amber-300 ml-2" />
              <p>Monthly premium subscriber</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 mt-2 mr-2">
        <Link href="/" className="text-2xl">
          <EditOutlined
            className="text-amber-300 mt-3 mr-5"
            style={{ fontSize: "25px" }}
          />
        </Link>
      </div>
    </div>
  );
}

export default profileCointainer;
