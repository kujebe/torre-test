import React, { Component } from "react";
import axios from "axios";

import PageTitle from "components/page-title/page-title.component";

import Spinner from "components/spinner/spinner.component";

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
        console.log(response.data.results);
        const jobs = response.data.results;
        this.setState({ jobs, isLoading: false });
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
      });
  }

  render() {
    return (
      <div>
        <PageTitle>Latest jobs</PageTitle>

        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <div>
            {this.state.jobs.map((job) => (
              <div key={job.id}>{job.status}</div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default HomePage;
