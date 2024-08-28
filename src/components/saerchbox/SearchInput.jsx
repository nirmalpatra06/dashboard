import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useSelector } from "react-redux";

const SearchInput = ({ products }) => {
  const allWidgets = useSelector((state) => state.dashboard.allWidgets);
  // console.log(...allWidgets);
  const categories = allWidgets[0].map((category) => category);
  const cspmDataTitles = categories[0].category1.charts.map((obj) => obj.title);
  // console.log(cspmDataTitles);
  const cwppDataTitles = categories[1].category2.charts.map((obj) => obj.title);
  const registryDataTitles = categories[2].category3.charts.map(
    (obj) => obj.title
  );

  const allTitles = [
    ...cspmDataTitles,
    ...cwppDataTitles,
    ...registryDataTitles,
  ];

  const [query, setQuery] = useState("");
  const [filteredTitle, setFilteredTitle] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);

    const filtered = allTitles.filter((title) =>
      title.toLowerCase().includes(value)
    );
    setFilteredTitle(filtered);
  };

  return (
    <div className="relative">
      <div className="w-full flex justify-center items-center">
        <MdSearch className="text-gray-500 text-xl absolute top-2 left-1" />
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search anything..."
          className="w-full mx-auto bg-blue-50 rounded-md  border-[1px] text-black  font-semibold focus:outline-none focus:border-cyan-500 border-gray-300 shadow-sm px-2 py-1 pl-6 pr-10"
        />
      </div>
      {query && (
        <ul className="absolute left-0 w-full mt-2 overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg">
          {filteredTitle.length > 0 ? (
            filteredTitle.map((item) => (
              <li
                key={item}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No products found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
