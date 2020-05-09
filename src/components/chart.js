import React, { PureComponent } from "react";
import { Line } from "react-chartjs-2";

class Chart extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = {
      labels: this.props.labels,
      datasets: [
        {
          label: "Confirmed",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          borderColor: "rgba(255, 159, 64, 1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(255, 159, 64, 1)",
          pointBackgroundColor: "rgba(255, 159, 64, 0.4)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255, 159, 64, 1)",
          pointHoverBorderColor: "rgba(255, 159, 64, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.dataset4,
        },
        {
          label: "Recovered",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(153, 102, 255, 0.2)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(153, 102, 255, 1)",
          pointBackgroundColor: "rgba(153, 102, 255, 0.4)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(153, 102, 255, 1)",
          pointHoverBorderColor: "rgba(153, 102, 255, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.dataset3,
        },
        {
          label: "Deaths",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(255, 99, 132, 1)",
          pointBackgroundColor: "rgba(255, 99, 132, 0.4)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255, 99, 132,1)",
          pointHoverBorderColor: "rgba(255, 99, 132, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.dataset2,
        },
        {
          label: "Active",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "rgba(75,192,192,0.4)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(75,192,192,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.dataset1,
        },
      ],
    };
    return (
      <Line
        data={data}
        width={100}
        height={300}
        options={{ maintainAspectRatio: false }}
      />
    );
  }
}

export default Chart;
