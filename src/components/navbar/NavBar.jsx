import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import SearchInput from "../saerchbox/SearchInput";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between w-full bg-white px-6 py-2">
      <div className="flex items-center justify-between gap-2 text-gray-500 font-semibold">
        <h2>Home</h2>
        <p>{`>`}</p>
        <h2 className="text-blue-900">Dashboard V2</h2>
      </div>
      <SearchInput />
      <div className="flex items-center justify-between gap-4 text-gray-500 font-semibold">
        <h2 className="hover:cursor-pointer">SomeText</h2>
        <p className="hover:cursor-pointer">
          <FaBell />
        </p>
        <h2 className="hover:cursor-pointer">
          <FaUserCircle />
        </h2>
      </div>
    </nav>
  );
};

export default NavBar;
