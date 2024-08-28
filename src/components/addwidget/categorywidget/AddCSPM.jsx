import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCSPMWidget } from "../../../store/dashboardSlice";
const AddCSPM = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(
      addCSPMWidget({
        insideText: "",
        id: title,
        type: "none",
        title: title,
        text: "",
        description: desc,
        isChecked: true,
        data: {
          labels: ["Not connected(2)", "Connected(2)"],
          datasets: [
            {
              data: [],
              backgroundColor: ["", ""],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          aspectRatio: 1,
          scales: {
            y: {
              display: false,
            },
            x: {
              display: false,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      })
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center ">
      <div className="bg-white w-[50%] rounded-lg shadow-lg relative">
        <h2 className="text-xl text-white font-semibold mb-4 bg-blue-800 py-1 pl-4">
          CSPM Executive Dashboard
        </h2>

        <div className="flex flex-col gap-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-[90%] p-2 mx-auto border border-black"
            type="text"
            placeholder="Add Heading"
          />
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-[90%] p-2 mx-auto border border-black"
            type="text"
            placeholder="Add Text"
          />
        </div>

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

export default AddCSPM;
