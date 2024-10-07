import React from "react";

const Albumes = ({ color }: { color?: string }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_141_94)">
        <path
          d="M11.3748 -0.000732422H5.24976C4.78563 -0.000732422 4.34051 0.183642 4.01232 0.511831C3.68413 0.840019 3.49976 1.28514 3.49976 1.74927C3.03563 1.74927 2.59051 1.93364 2.26232 2.26183C1.93413 2.59002 1.74976 3.03514 1.74976 3.49927V12.2493C1.74976 12.7134 1.93413 13.1585 2.26232 13.4867C2.59051 13.8149 3.03563 13.9993 3.49976 13.9993H9.62476C10.0889 13.9993 10.534 13.8149 10.8622 13.4867C11.1904 13.1585 11.3748 12.7134 11.3748 12.2493C11.8389 12.2493 12.284 12.0649 12.6122 11.7367C12.9404 11.4085 13.1248 10.9634 13.1248 10.4993V1.74927C13.1248 1.28514 12.9404 0.840019 12.6122 0.511831C12.284 0.183642 11.8389 -0.000732422 11.3748 -0.000732422ZM11.3748 11.3743V3.49927C11.3748 3.03514 11.1904 2.59002 10.8622 2.26183C10.534 1.93364 10.0889 1.74927 9.62476 1.74927H4.37476C4.37476 1.5172 4.46694 1.29464 4.63104 1.13055C4.79513 0.966455 5.01769 0.874268 5.24976 0.874268H11.3748C11.6068 0.874268 11.8294 0.966455 11.9935 1.13055C12.1576 1.29464 12.2498 1.5172 12.2498 1.74927V10.4993C12.2498 10.7313 12.1576 10.9539 11.9935 11.118C11.8294 11.2821 11.6068 11.3743 11.3748 11.3743ZM2.62476 3.49927C2.62476 3.2672 2.71694 3.04464 2.88104 2.88055C3.04513 2.71645 3.26769 2.62427 3.49976 2.62427H9.62476C9.85682 2.62427 10.0794 2.71645 10.2435 2.88055C10.4076 3.04464 10.4998 3.2672 10.4998 3.49927V12.2493C10.4998 12.4813 10.4076 12.7039 10.2435 12.868C10.0794 13.0321 9.85682 13.1243 9.62476 13.1243H3.49976C3.26769 13.1243 3.04513 13.0321 2.88104 12.868C2.71694 12.7039 2.62476 12.4813 2.62476 12.2493V3.49927Z"
          fill={`${color ? color : "#D63415"}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_141_94">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Albumes;
