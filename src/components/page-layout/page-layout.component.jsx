import React from "react";

import "./page-layout.styles.scss";

const PageTitle = ({ title, children }) => (
  <div className="content-container">
    <h2 className="page-title">{title}</h2>
    <div className="content">{children}</div>
  </div>
);

export default PageTitle;
