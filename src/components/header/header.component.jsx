import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as FindProfessionals } from "assets/find-people.svg";
import { ReactComponent as FindRemoteJob } from "assets/remote-icon.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header-container">
    <div className="header-top">
      <Link className="logo-wrapper" to="/">
        <Logo className="logo-icon" />
        <div className="brand-name">DevConnect</div>
      </Link>
      <div className="menu-wrapper">
        <Link to="/professionals">Find Workers</Link>
        <Link to="/companies">Find Jobs</Link>
      </div>
    </div>
    <div className="header-bottom">
      <div className="for-companies">
        <FindProfessionals className="icon" />
        <div className="description">
          <h2>For Companies</h2>
          <span>
            Your perfect professionals ready to do remote work immediately
          </span>
        </div>
      </div>
      <div className="for-professionals">
        <FindRemoteJob className="icon" />
        <div className="description">
          <h2>For Professionals</h2>
          <span>Find your perfect companies ready to hire remote workers</span>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
