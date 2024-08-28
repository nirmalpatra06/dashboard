import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatedCSPMChart } from "../../store/dashboardSlice";

const AddWidget = ({ onClose }) => {
  const cspmData = useSelector((state) => state.dashboard.cspmData);
  const dispatch = useDispatch();
  const cspmArr = cspmData.map((item) => item);
  const initialchart = cspmArr[0].charts;
  // console.log(cspmCharts);

  const [cspmCharts, setCspmCharts] = useState(initialchart);
  // console.log(cspmCharts);
  const handleChange = (title) => {
    const updatedCharts = cspmCharts.map((item) =>
      item.title === title ? { ...item, isChecked: !item.isChecked } : item
    );
    setCspmCharts(updatedCharts);
  };

  const handleConfirm = () => {
    const selectedWidgets = cspmCharts.map((chart) => chart);
    selectedWidgets.forEach((chart) => {
      dispatch(updatedCSPMChart(chart));
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center ">
      <div className="bg-white w-[50%] rounded-lg shadow-lg relative">
        <h2 className="text-xl  font-semibold mb-4 bg-blue-900 text-white py-1 pl-4">
          Add Widget
        </h2>
        <p className="text-sm text-gray-600 mb-4 pl-4">
          Personalise your dashboard by adding the following widget
        </p>

        <div className="flex mb-4 border-b pl-4">
          <button className="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
            CSPM
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500">
            CWPP
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500">
            Image
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500">
            Ticket
          </button>
        </div>
        {cspmCharts.map((chart) => (
          <div
            key={chart.title}
            className="flex justify-center items-center gap-3  mb-2 px-4"
          >
            <label className="w-full hover:cursor-pointer hover:bg-blue-100 p-1 flex items-center space-x-2">
              <input
                checked={chart.isChecked}
                onChange={() => handleChange(chart.title)}
                type="checkbox"
                className="form-checkbox h-5 w-5 "
              />
              <span className="text-sm">{chart.title}</span>
            </label>
          </div>
        ))}

        <div className=" absolute w-full bottom-0 flex justify-end space-x-2 p-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidget;
