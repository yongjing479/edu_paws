"use client";
import NavBar from "./homeComponent/navBar";
import HomeContainer from "./homeComponent/homeContainer/homeContainer";
import { LeftCircleFilled , RightCircleFilled } from "@ant-design/icons";
import ProgressBar from "./homeComponent/progressBar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />

      <div className="flex flex-row justify-center pr-40">

        <div className="flex flex-col items-center justify-center">        

          <div className="w-2/3 aspect-square relative">
            <img
              className="w-50 h-50 object-cover"
              src="pet1.png"
            />
          </div>   
        </div>

        <div className="flex flex-col pt-10">
          <h1 className="font-bold text-violet-900 text-3xl mb-1">Baddie</h1>
          <p className="font-medium text-violet-900 text-sm">Level 1</p>
        
          <div className='pt-10'>
            <ProgressBar/>
          </div>               
        </div>

        
        
        
      </div>

      <div className="flex flex-row gap-2 justify-center">
      <LeftCircleFilled className='text-purple-800 text-3xl'/>
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/chicken-leg-7266604-5972485.png?f=webp" className="w-20 h-20"/>
      <RightCircleFilled className='text-purple-800 text-3xl' />

      </div>

      <HomeContainer />
    </div>
  );
}
