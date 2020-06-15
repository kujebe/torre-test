import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "components/header/header.component";
import HomePage from "pages/home-page/home-page";
import CompaniesPage from "pages/companies-page/companies-page";
import ProfessionalsPage from "pages/professionals-page/professionals-page";

import "./app.styles.scss";

function App() {
  return (
    <div>
      <Header />
      <div className="content-container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/professionals" component={ProfessionalsPage} />
          <Route exact path="/companies" component={CompaniesPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
