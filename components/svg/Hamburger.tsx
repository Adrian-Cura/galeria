import React from "react";

const Hamburger = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 23H26H4Z" fill="#4A566D" />
      <path
        d="M4 7H26M4 15H26M4 23H26"
        stroke="#4A566D"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Hamburger;
