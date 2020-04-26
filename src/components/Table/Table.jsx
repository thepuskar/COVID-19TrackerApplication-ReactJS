import React from "react";
import MaterialTable from "material-table";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }
  state = {
    loading: false,
    stats: [],
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://corona.lmao.ninja/v2/countries") //data source
      .then((response) => response.json())
      .then((res) => {
        this.setState({ stats: res, loading: false }, () => console.log(res));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <React.Fragment>
        <MaterialTable
          style={{
            marginTop: "50px",
            display: "block",
            width: "95%",
            marginRight: "30px",
            marginLeft: "30px",
            overflow: "auto",
          }}
          title="COVID-19 World Table"
          columns={[
            { title: "Country", field: "country" },
            { title: "Total Cases", field: "cases" },
            { title: "Current Cases", field: "todayCases" },
            { title: "Total Deaths", field: "deaths" },
            { title: "Current Deaths", field: "todayDeaths" },
            { title: "Recovered Patients", field: "recovered" },
            { title: "Active Patients", field: "active" },
            { title: "Critical Patients", field: "critical" },
          ]}
          data={this.state.stats}
          actions={[
            {
              icon: "refresh",
              tooltip: "Refresh",
              isFreeAction: true,
              onClick: () =>
                this.tableRef.current && this.tableRef.current.onQueryChange(),
            },
          ]}
          options={{
            headerStyle: {
              backgroundColor: "rgba(0, 0, 255, 0.5)",
              color: "#FFF",
            },
          }}
        />
        
    
      </React.Fragment>
    );
  }
}
export default Table;
