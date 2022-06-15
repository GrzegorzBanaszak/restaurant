import React from "react";
import "../styles/components/Spinner.scss";
const aplliedStyles = (color) => {
  return {
    borderColor: `${color} transparent transparent transparent`,
  };
};
const Spinner = ({ color }) => {
  return (
    <div className="lds-ring">
      <div style={aplliedStyles(color)}></div>
      <div style={aplliedStyles(color)}></div>
      <div style={aplliedStyles(color)}></div>
      <div style={aplliedStyles(color)}></div>
    </div>
  );
};

export default Spinner;
