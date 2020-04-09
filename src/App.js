import React from "react";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Table from "./components/Table/Table";
import Footer from "./components/Footer/Footer";

import { fetchData } from "./api/";

import styles from "./App.module.css";

import image from "./images/corona.png";

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
      <div>
        <div className={styles.container}>
          <img className={styles.img} src={image} alt="COVID-19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
          <Table />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
