import React from "react";
import { FaInfinity } from "react-icons/fa";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="bg-black rounded-full border-gray-400 h-28 w-28 relative overflow-hidden">
          <p className="text-[50px] text-white absolute top-0 left-0 animate-roam">
            <FaInfinity />
          </p>
        </div>
        <h1 className="text-black text-center font-serif font-semibold text-2xl mt-8">Hello!</h1>
      </div>
    </div>
  );
};

export default Loading;
