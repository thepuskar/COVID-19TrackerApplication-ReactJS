import React from "react";

import "./App.css";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
