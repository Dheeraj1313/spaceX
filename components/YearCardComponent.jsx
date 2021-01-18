import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import styles from "./style.module.css";

const yearArr = [
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
];
const YearCardComponent = (props) => {
  const { filterData } = props;
  return (
    <Grid container item className={styles.innerCardGrid}>
      <Grid item={true} xs={12} lg={12}>
        <Typography variant="h4">SpaceX Lanch Programs</Typography>
      </Grid>
      <Grid item={true} xs={12} lg={12}>
        <Typography variant="h6">Filter</Typography>
      </Grid>
      <Grid item={true} xs={12} lg={12}>
        <Typography className={styles.filterText}>
          <u>Launch year</u>
        </Typography>
      </Grid>
      {yearArr.map((year, i) => (
        <Grid
          item={true}
          key={year}
          className={styles.buttonGrid}
          xs={6}
          lg={6}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={(evt) => {
              evt.preventDefault();
              filterData(year, "year");
            }}
          >
            {year}
          </Button>
        </Grid>
      ))}

      <Grid container item>
        <Grid item={true} xs={12} lg={12}>
          <Typography className={styles.filterText}>
            <u>Sucessful Launch</u>
          </Typography>
        </Grid>
        <Grid item={true} xs={6} lg={6} className={styles.buttonGrid}>
          <Button
            variant="contained"
            color="primary"
            onClick={(evt) => {
              filterData(true, "launchSucess");
            }}
          >
            true
          </Button>
        </Grid>
        <Grid item={true} xs={6} lg={6} className={styles.buttonGrid}>
          <Button
            variant="contained"
            color="primary"
            onClick={(evt) => {
              filterData(false, "launchSucess");
            }}
          >
            false
          </Button>
        </Grid>
      </Grid>
      <Grid container item>
        <Grid item={true} xs={12} lg={12}>
          <Typography className={styles.filterText}>
            <u>Sucessful Landing</u>
          </Typography>
        </Grid>
        <Grid item={true} xs={6} lg={6} className={styles.buttonGrid}>
          <Button
            variant="contained"
            color="primary"
            onClick={(evt) => {
              filterData(true, "landSucess");
            }}
          >
            true
          </Button>
        </Grid>
        <Grid item={true} xs={6} lg={6} className={styles.buttonGrid}>
          <Button
            variant="contained"
            color="primary"
            onClick={(evt) => {
              filterData(false, "landSucess");
            }}
          >
            false
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default YearCardComponent;
