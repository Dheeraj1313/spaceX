import YearCardComponent from "../components/YearCardComponent";
import MissionCardComponent from "../components/MissionCardComponent";
import { Grid } from "@material-ui/core";
import styles from "../components/style.module.css";
import { useEffect, useState } from "react";

const Home = ({ data }) => {
  const [productData, setProductData] = useState(data);
  const [selectedYear, setYear] = useState("");
  const [launchValue, setLaunchValue] = useState("");
  const [landingValue, setLandingValue] = useState("");
  const filterData = (value, filterType, evt) => {
    evt.preventDefault();
    switch (filterType) {
      case "year":
        setYear(value);
        break;
      case "launchSucess":
        setLaunchValue(value);
        break;
      case "landSucess":
        setLandingValue(value);
        break;
      default:
        setYear("");
        setLaunchValue("");
        setLandingValue("");
    }
  };
  // useEffect(() => {
  //   let filteredUrl = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchValue}&land_success=${landingValue}&launch_year=${selectedYear}`;
  //   if (launchValue && selectedYear === "" && !landingValue) {
  //     filteredUrl =
  //       "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true";
  //   } else if (launchValue && landingValue && selectedYear === "") {
  //     filteredUrl =
  //       "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true";
  //   } else if (launchValue && selectedYear !== "" && landingValue) {
  //     filteredUrl = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&&launch_year=${selectedYear}`;
  //   }

  //   fetch(filteredUrl)
  //     .then((response) => response.json())
  //     .then((data) => setProductData(data))
  //     .catch((err) => {
  //       console.log("NETWORK ERROR", err);
  //     });
  // }, [selectedYear, launchValue, landingValue]);

  return (
    <Grid container item className={styles.containerCard}>
      <Grid item={true} xs={12} sm={4} lg={2}>
        <YearCardComponent filterData={filterData} />
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={8}
        lg={10}
        className={styles.containerCard}
      >
        {/* {productData.map((val) => {
          return (
            <Grid item={true} key={val.flight_number} xs={12} sm={6} lg={3}>
              <MissionCardComponent {...val} />
            </Grid>
          );
        })} */}
      </Grid>
    </Grid>
  );
};

// export async function getServerSideProps() {
//   try {
//     const res = await fetch("https://api.spaceXdata.com/v3/launches?limit=100");
//     const data = await res.json();
//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (err) {
//     console.log("SEVER ERROR");
//   }
// }
export default Home;
