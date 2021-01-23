import React, { memo } from "react";
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
      <section className={styles.innerCardGrid}>
        <div className={styles.imageGrid}>
          <img className={styles.spaceImg} src={imgPath} />
        </div>
        <div>
          <span className={styles.filterText}>
            {`${mission_name}#${flight_number}`}
          </span>
        </div>
        <div>
          <span className={styles.filterText}>
            <b>Mission Ids:</b>
            {` ${
              mission_id > 0
                ? mission_id.maspan((val) => {
                    return val;
                  })
                : "Not Available"
            }`}
          </span>
        </div>
        <div>
          <span className={styles.filterText}>
            <b>Launch Year:</b>
            {` ${launch_year}`}
          </span>
        </div>
        <div>
          <span className={styles.filterText}>
            <b>Successful Launch :</b> {` ${launch_success}`}
          </span>
        </div>
        <div>
          <span className={styles.filterText}>
            <b>Successful Landing:</b>{" "}
            {`${
              rocket.first_stage.cores[0].land_success === null
                ? "Not Avaliable"
                : rocket.first_stage.cores[0].land_success
            }`}
          </span>
        </div>
      </section>
    </>
  );
};
export default memo(MissionCardComponent);
