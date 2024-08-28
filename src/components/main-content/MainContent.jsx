import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { TiArrowSync } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoClockFill } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";

import CSPMDashboard from "../category/CSPM";
import RegistryScan from "../category/RegistryScan";
import CWPPDashboard from "../category/CWPP";
import AddWidget from "../addwidget/AddWidget";
const MainContent = () => {
  const [showAddWidget, setShowAddWidget] = useState(false);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex items-center justify-between px-6 mt-10">
        <h2 className="font-bold text-black">CNAPP Dashboard</h2>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setShowAddWidget(true)}
            className="bg-white font-semibold text-sm text-gray-700 p-1 border-[1px] border-gray-400 rounded-md flex justify-center items-center"
          >
            <p>Add widget</p>
            <GoPlus className="text-xl" />
          </button>
          <button className="bg-white p-1 border-[1px] border-gray-400 rounded-md">
            <TiArrowSync />
          </button>
          <button className="bg-white p-1 border-[1px] border-gray-400 rounded-md">
            <BsThreeDotsVertical />
          </button>
          <button className="font-semibold text-blue-800 bg-white p-1 border-[1px] border-blue-800 rounded-md flex items-center gap-1">
            <GoClockFill />
            <p className="border-l border-l-blue-800 px-1">Last 2 days</p>
            <MdKeyboardArrowDown />
          </button>
        </div>
      </div>
      <div className="w-full">
        <CSPMDashboard />
        <CWPPDashboard />
        <RegistryScan />
      </div>

      {/* Widget */}
      {showAddWidget && <AddWidget onClose={() => setShowAddWidget(false)} />}
    </div>
  );
};

export default MainContent;
