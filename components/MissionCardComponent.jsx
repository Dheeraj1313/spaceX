import React from "react";
import { Grid, Typography } from "@material-ui/core";
import styles from "./style.module.css";

const MissionCardComponent = (props) => {
  const {
    mission_name,
    flight_number,
    mission_id,
    launch_year,
    links,
    launch_success,
    rocket,
  } = props;
  const imgPath = links.mission_patch_small;

  return (
    <>
      <Grid className={styles.innerCardGrid}>
        <Grid className={styles.imageGrid} item={true} xs={12} lg={12}>
          <img className={styles.spaceImg} src={imgPath} />
        </Grid>
        <Grid item={true} xs={12} lg={12}>
          <Typography className={styles.filterText}>
            {`${mission_name}#${flight_number}`}
          </Typography>
        </Grid>
        <Grid item={true} xs={12} lg={12}>
          <Typography className={styles.filterText}>
            <b>Mission Ids:</b>
            {` ${
              mission_id > 0
                ? mission_id.map((val) => {
                    return val;
                  })
                : "Not Available"
            }`}
          </Typography>
        </Grid>
        <Grid item={true} xs={12} lg={12}>
          <Typography className={styles.filterText}>
            <b>Launch Year:</b>
            {` ${launch_year}`}
          </Typography>
        </Grid>
        <Grid item={true} xs={12} lg={12}>
          <Typography className={styles.filterText}>
            <b>Successful Launch :</b> {` ${launch_success}`}
          </Typography>
        </Grid>
        <Grid item={true} xs={12} lg={12}>
          <Typography className={styles.filterText}>
            <b>Successful Landing:</b>{" "}
            {`${
              rocket.first_stage.cores[0].land_success === null
                ? "Not Avaliable"
                : rocket.first_stage.cores[0].land_success
            }`}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default MissionCardComponent;
