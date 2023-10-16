"use client";
// import 'antd/dist/antd.css';
import NavBar from "./homeComponent/navBar";
import HomeContainer from "./homeComponent/homeContainer/homeContainer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <img src="pet1.png" className="w-21 h-21 mb-5" />
        <h1 className="font-bold text-violet-900 text-3xl mb-1">Baddie</h1>
        <p className="font-medium text-violet-900 text-sm">Level 1</p>
      </div>

      <HomeContainer />
    </div>
  );
}
