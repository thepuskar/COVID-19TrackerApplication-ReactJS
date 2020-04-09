import React from "react";

import styles from "./App.module.css";
import coronaImg from "./images/corona.png";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.img} src={coronaImg} alt="coronaImg" />
        <Cards data={data} />
        <CountryPicker handelCountryChang={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
