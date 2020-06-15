import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children }) => (
  <button type="button" className="custom-button">
    {children}
  </button>
);

export default CustomButton;
