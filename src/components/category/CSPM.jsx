import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import DoughnutCard from "../cards/DoughnutCard";
import { useSelector } from "react-redux";
import AddCSPM from "../addwidget/categorywidget/AddCSPM";

const CSPMDashboard = () => {
  const cspmData = useSelector((state) => state.dashboard.cspmData);
  // console.log(cspmData);

  const cspmArr = cspmData.map((item) => item);

  const cspmCharts = cspmArr[0].charts;

  const [showAddWidget, setShowAddWidget] = useState(false);

  return (
    <div className="px-6">
      <h3 className="font-bold text-black">CSPM Executive Dashboard</h3>
      <div className="flex flex-wrap items-center justify-around w-full">
        {cspmCharts
          .filter((chart) => chart.isChecked === true)
          .map((chart) => {
            if (chart.type !== "none")
              return (
                <DoughnutCard
                  key={chart.title}
                  title={chart.title}
                  insideText={chart.text}
                  options={chart.options}
                  data={chart.data}
                />
              );
          })}
        {cspmCharts
          .filter((chart) => chart.isChecked === true)
          .map((chart) => {
            if (chart.type === "none") {
              return (
                <div
                  key={chart.title}
                  className="bg-white w-[350px] h-[180px] rounded-2xl border-[10px] border-gray-100 p-2 shadow-md"
                >
                  <h3 className="font-bold text-black text-sm">
                    {chart.title}
                  </h3>
                  <div className="w-full h-full flex justify-center items-center">
                    <p>{chart.description}</p>
                  </div>
                </div>
              );
            }
          })}
        <div className="bg-white w-[350px] h-[180px] rounded-2xl border-[10px] border-gray-100 p-2 flex justify-center items-center shadow-md">
          <button
            onClick={() => setShowAddWidget(true)}
            className="flex justify-center items-center bg-white font-semibold text-sm text-gray-700 p-1 border-[1px] border-gray-400 rounded-md"
          >
            <GoPlus className="text-xl" />
            <p>Add widget</p>
          </button>
        </div>
      </div>
      {showAddWidget && <AddCSPM onClose={() => setShowAddWidget(false)} />}
    </div>
  );
};

export default CSPMDashboard;
