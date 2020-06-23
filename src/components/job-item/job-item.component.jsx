import React, { Fragment } from "react";
import Moment from "react-moment";

import CustomButton from "components/custom-button/custom-button.component";

import "./job-item.styles.scss";

const JobItem = ({ job }) => {
  const { objective, deadline, organizations, type } = job;
  console.log(job);
  return (
    <div className="job-item-container">
      <div className="job-title">{objective}</div>
      <div className="job-details">
        <div className="company">
          <div className="company-title">Company</div>
          <div className="company-name-and-image">
            {organizations.length > 0 && (
              <Fragment>
                <img
                  className="company-image"
                  src={organizations[0].picture}
                  alt={organizations[0].name}
                />
                <span>{organizations[0].name}</span>
              </Fragment>
            )}
          </div>
        </div>
        <div className="job-type">
          <div className="job-type-title">Job Type</div>
          <span>{type.split("-").join(" ")}</span>
        </div>
        <div className="deadline">
          <div className="deadline-title">Deadline</div>
          <Moment format="LL">{deadline}</Moment>
        </div>
      </div>
      <div className="button-wrapper">
        <CustomButton>Apply</CustomButton>
      </div>
    </div>
  );
};

export default JobItem;
