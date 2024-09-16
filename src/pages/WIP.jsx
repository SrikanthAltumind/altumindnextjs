import React from 'react'
import wip from './../assets/in-progress.svg'
import { useNavigate } from 'react-router-dom';

const WIP = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen font-sans">
      <div className="flex flex-col justify-center items-center w-full">
        <img
          src={wip}
          alt="wip_screen"
          width="100%"
          height="100%"
          className="object-contain lg:w-[50%] w-[300px] h-[450px]"
        />
        <p className="font-extrabold text-[90px] text-center text-[#324B50]">
          W.I.P
        </p>
        <button
          className="underline cursor-pointer font-medium"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default WIP