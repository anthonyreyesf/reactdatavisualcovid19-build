import React, { PureComponent } from "react";
import SubCard from "./subCard";
import Chart from "./chart";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

class Card extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      worldData: [],
      isLoaded: false,
      inputValue: "",
    };
  }

  componentDidMount() {
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          worldData: data,
          isLoaded: true,
        });
      });
  }

  render() {
    var nf = new Intl.NumberFormat();
    const countryList = Object.keys(this.state.worldData).filter((country) => {
      return (
        country.toLowerCase().indexOf(this.state.inputValue.toLowerCase()) !==
        -1
      );
    });
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;

    if (!this.state.isLoaded) {
      return (
        <div>
          <header className="header">
            <h1>DAILY COVID-19 STATS</h1>
          </header>
          <div className="loadingScreen">
            <div>
              <BeatLoader
                css={override}
                size={20}
                color={"#a3b4b8"}
                loading={true}
              />
              <h2>Loading the latest data...</h2>
            </div>
          </div>
        </div>
      );
    } else
      return (
        <div>
          <header>
            <h1>DAILY COVID-19 STATS</h1>

            <input
              className="input"
              type="text"
              placeholder="Search Country"
              value={this.state.inputValue}
              onChange={(val) =>
                this.setState({ inputValue: val.target.value })
              }
            />
          </header>
          <div className="cardGrid">
            {countryList.map((country) => {
              let latestConfirmed = 0;
              let latestRecovered = 0;
              let latestDeaths = 0;
              let latestActive = 0;
              //let latestDate = "";
              let confirmedArr = [];
              let recoveredArr = [];
              let deathsArr = [];
              let activeArr = [];
              let dateArray = [];
              this.state.worldData[country].forEach(
                ({ confirmed, recovered, deaths, date }) => {
                  //latestDate = date;
                  latestConfirmed = confirmed;
                  latestRecovered = recovered;
                  latestDeaths = deaths;
                  latestActive =
                    latestConfirmed - latestRecovered - latestDeaths;
                  confirmedArr.push(confirmed);
                  recoveredArr.push(recovered);
                  deathsArr.push(deaths);
                  activeArr.push(latestActive);
                  dateArray.push(date);
                }
              );
              return (
                <div className="card" key={country}>
                  <h2>{country}</h2>
                  <div className="statsGrid">
                    <SubCard
                      label="Confirmed"
                      data={nf.format(latestConfirmed)}
                    />
                    <SubCard
                      label="Recovered"
                      data={nf.format(latestRecovered)}
                    />
                    <SubCard label="Deaths" data={nf.format(latestDeaths)} />
                    <SubCard label="Active" data={nf.format(latestActive)} />
                  </div>
                  <div className="graphCard">
                    <Chart
                      dataset1={activeArr}
                      dataset2={deathsArr}
                      dataset3={recoveredArr}
                      dataset4={confirmedArr}
                      labels={dateArray}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <footer>
            <p>created by Anthony Reyes</p>
          </footer>
        </div>
      );
  }
}

export default Card;
