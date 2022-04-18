import React from "react";
import "./MainButton.scss";

const MainButtons = ({ text, children, handleOpenFilter }) => {
  return (
    <div className="wrapperButton" onClick={handleOpenFilter}>
      <div className="children">{children}</div>
      <h4 className="buttonsText">{text}</h4>
    </div>
  );
};

export default MainButtons;
