import React from "react";
import { FaInfinity } from "react-icons/fa";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-left py-2">
      <div>
        <div className="bg-black rounded-full border-gray-400 h-12 w-12 relative overflow-hidden">
          <p className="text-[25px] text-white absolute top-0 left-0 animate-roam">
            <FaInfinity />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
