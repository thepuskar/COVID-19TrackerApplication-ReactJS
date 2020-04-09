import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import "./Cards.style.scss";

const Cards = (props) => {
  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">Real Date</Typography>
            <Typography variant="body2">Number of active cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">Real Date</Typography>
            <Typography variant="body2">Number of recovered</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Death
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">Real Date</Typography>
            <Typography variant="body2">Number of death</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
