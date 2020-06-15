import React, { Component } from "react";
import axios from "axios";

import Spinner from "components/spinner/spinner.component";
import PageLayout from "components/page-layout/page-layout.component";
import JobItem from "components/job-item/job-item.component";

class HomePage extends Component {
  state = {
    jobs: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios({
      url:
        "https://search.torre.co/opportunities/_search/?offset=0&size=21&aggregate=10 ",
      method: "post",
    })
      .then((response) => {
        this.setState({ jobs: response.data.results, isLoading: false });
      })
      .catch((error) => {
        console.log("Failed to load jobs: ", error);
      });
  }

  render() {
    return (
      <PageLayout title="Latest jobs">
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          this.state.jobs.map((job) => <JobItem key={job.id} job={job} />)
        )}
      </PageLayout>
    );
  }
}

export default HomePage;
