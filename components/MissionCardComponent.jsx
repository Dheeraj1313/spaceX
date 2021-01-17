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
            {`Mission Ids : ${
              mission_id > 0
                ? mission_id.map((val) => {
                    return val;
                  })
                : ""
            }`}
          </Typography>
        </Grid>
        <Grid item={true} xs={12} lg={12}>
          <Typography className={styles.filterText}>
            {`Launch Year: ${launch_year}`}
          </Typography>
        </Grid>
        <Grid item={true} xs={12} lg={12}>
          <Typography className={styles.filterText}>
            {`Launch Success: ${launch_success}`}
          </Typography>
        </Grid>
        <Grid item={true} xs={12} lg={12}>
          <Typography className={styles.filterText}>
            {`Land Success: ${rocket.first_stage.cores[0].land_success}`}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default MissionCardComponent;
