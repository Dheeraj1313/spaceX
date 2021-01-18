import YearCardComponent from "../components/YearCardComponent";
import MissionCardComponent from "../components/MissionCardComponent";
import { Grid, CircularProgress } from "@material-ui/core";
import styles from "../components/style.module.css";
import { useEffect, useState } from "react";

const Home = ({ data }) => {
  const [productData, setProductData] = useState(data);
  const [selectedYear, setYear] = useState("");
  const [launchValue, setLaunchValue] = useState("");
  const [landingValue, setLandingValue] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  const filterData = (value, filterType) => {
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
  useEffect(() => {
    let filteredUrl = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchValue}&land_success=${landingValue}&launch_year=${selectedYear}`;
    setIsLoader(true);
    fetch(filteredUrl)
      .then((response) => response.json())
      .then((data) => {
        setIsLoader(false);
        setProductData(data);
      })
      .catch((err) => {
        console.log("NETWORK ERROR", err);
      });
  }, [selectedYear, launchValue, landingValue]);

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
        {!isLoader ? (
          productData.map((val) => {
            return (
              <Grid item={true} key={val.flight_number} xs={12} sm={6} lg={3}>
                <MissionCardComponent {...val} />
              </Grid>
            );
          })
        ) : (
          <CircularProgress />
        )}
      </Grid>
      <h1>Developed By: Dheeraj Joshi</h1>
    </Grid>
  );
};

export const getStaticProps = async function () {
  try {
    const res = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100`);
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log("SEVER ERROR");
  }
};
export default Home;
