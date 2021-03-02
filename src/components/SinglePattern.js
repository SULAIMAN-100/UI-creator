import React from "react";
import { Navbars } from "./Navbars";
import "./SinglePattern.css";

export const SinglePattern = () => {
  const selectValue = (e) => {
    let nav = e.target.value;
    console.log(nav);
  };

  return (
    <div>
      {/* <select onChange={selectValue} className="select-dropdown">
        <option>Select a Navbar</option>
        <option value="white-nav">White bootstrap Nav</option>
      </select>{" "} */}
      <Navbars />
    </div>
  );
};
