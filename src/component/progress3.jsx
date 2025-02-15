import React, { useState, useEffect } from "react";

const ProgressBarThree = ({ progress }) => {
  const progressBarStyle = {
    width: `${progress}%`,
    height: "5px",
    backgroundColor: "#3b7c96f6",
    transition: "width 0.5s ease-in-out",
  };

  return (
    <div
      style={{
        width: "97%",
        backgroundColor: "#e0e0df",
        borderRadius: "7px",
        marginLeft: 10,
        marginBottom: 20,
      }}
    >
      <div style={progressBarStyle}></div>
    </div>
  );
};
export default ProgressBarThree;
