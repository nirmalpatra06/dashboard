import React from "react";
import { BarChart } from "../charts/BarChart";

const BarCard = ({ data, options, title, subtitle }) => {
  return (
    <div className="bg-white w-[350px] h-[180px] rounded-2xl border-[10px] border-gray-100 p-2 shadow-md">
      <h3 className="font-bold text-black text-sm">{title}</h3>
      <div>
        <h3 className="text-xs">{subtitle}</h3>
        <BarChart data={data} options={options} />
        <div className=" w-full flex items-center justify-center">
          {/*Chart Details */}

          <div className="w-full flex flex-col gap-2">
            <div className="flex justify-center gap-2">
              <h3 className="flex items-center gap-2 ">
                <span className="w-1 h-1 p-1 border rounded-sm bg-red-900"></span>
                <p>Critical(9)</p>
              </h3>
              <h3 className="flex items-center gap-2 ">
                <span className="w-1 h-1 p-1 border rounded-sm bg-red-500"></span>
                <p>High(150)</p>
              </h3>
            </div>
            <div className="flex justify-center gap-2">
              <h3 className="flex items-center gap-2 ">
                <span className="w-1 h-1 p-1 border rounded-sm bg-orange-300"></span>
                <p>Medium(360)</p>
              </h3>
              <h3 className="flex items-center gap-2 ">
                <span className="w-1 h-1 p-1 border rounded-sm bg-yellow-500"></span>
                <p>Low(400)</p>
              </h3>
              <h3 className="flex items-center gap-2 ">
                <span className="w-1 h-1 p-1 border rounded-sm bg-gray-500"></span>
                <p>None(400)</p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarCard;
