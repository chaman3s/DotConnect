import React from "react";

export const SearchSVG = ({ fillColor = "#000", className, ...props }) => {
  return (
    <svg
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="30px"
      height="30px"
      className={className}
      {...props}
    >
      <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.389504 23 17.512719 22.126052 19.15625 20.6875 L 25.292969 26.707031 L 26.707031 25.292969 L 20.6875 19.15625 C 22.126052 17.512719 23 15.389504 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.442987 5 21 8.5570131 21 13 C 21 17.442987 17.442987 21 13 21 C 8.5570131 21 5 17.442987 5 13 C 5 8.5570131 8.5570131 5 13 5 z" />
    </svg>
  );
};
