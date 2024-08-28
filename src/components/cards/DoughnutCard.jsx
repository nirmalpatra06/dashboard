import React from "react";
import { DoughnutChart } from "../charts/DughnutChart";

const DoughnutCard = ({ data, options, title, insideText }) => {
  return (
    <div className="bg-white w-[350px] h-[180px] rounded-2xl border-[10px] border-gray-100 p-2 shadow-md">
      <h3 className="font-bold text-black text-sm">{title}</h3>
      <div className="w-full h-[85%] flex items-center ">
        <DoughnutChart options={options} data={data} insideText={insideText} />
        <div className=" w-full flex items-center justify-center">
          {/* Chart Details */}
          {title === "Cloud Accounts" && (
            <div>
              <h3 className="flex items-center gap-2 ">
                <span className="w-1 h-1 p-1 border rounded-sm bg-blue-500"></span>
                <p>Connetect(2)</p>
              </h3>
              <h3 className="flex items-center gap-2 ">
                <span className="w-1 h-1 p-1 border rounded-sm bg-blue-200 "></span>
                <p>Not connected(2)</p>
              </h3>
            </div>
          )}

          {title === "Cloud Account Risk Assessment" && (
            <div>
              <h3 className="flex items-center gap-2 ">
                <span className="w-1 h-1 p-1 border rounded-sm bg-red-500"></span>
                <p>Failed(1689)</p>
              </h3>
              <h3 className="flex items-center gap-2 ">
                <span className="w-1 h-1 p-1 border rounded-sm bg-yellow-500"></span>
                <p>Warning(681)</p>
              </h3>
              <h3 className="flex items-center gap-2 ">
                <span className="w-1 h-1 p-1 border rounded-sm bg-gray-300"></span>
                <p>Not available(36)</p>
              </h3>
              <h3 className="flex items-center gap-2 ">
                <span className="w-1 h-1 p-1 border rounded-sm bg-green-500"></span>
                <p>Passed(7253)</p>
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoughnutCard;
