import YearCardComponent from "../components/YearCardComponent";
import MissionCardComponent from "../components/MissionCardComponent";
import styles from "../components/style.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const history = useRouter();
  const [productData, setProductData] = useState([]);
  const [selectedYear, setYear] = useState("");
  const [launchValue, setLaunchValue] = useState("");
  const [landingValue, setLandingValue] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const [isDbleClick, setDblClick] = useState(false);

  useEffect(() => {
    let filteredUrl;
    let baseUrl = "https://api.spaceXdata.com/v3/launches";

    const isManualSelected = !selectedYear && !launchValue && !landingValue;
    if (isManualSelected && !isDbleClick) {
      const urlLaunchValue =
        history.asPath.length > 1 && history.asPath.split("&")[1].split("=")[1];
      const urlLandingValue =
        history.asPath.length > 1 && history.asPath.split("&")[2].split("=")[1];
      const urlYearValue =
        history.asPath.length > 1 && history.asPath.split("&")[3].split("=")[1];
      const isDataOnUrl =
        urlLaunchValue.length > 0 ||
        urlYearValue.length > 0 ||
        urlLandingValue.length > 0;
      if (isDataOnUrl && isManualSelected) {
        filteredUrl = history.asPath;
        setYear(urlYearValue);
        setLaunchValue(urlLaunchValue);
        setLandingValue(urlLandingValue);
      } else {
        filteredUrl = `?limit=100&launch_success=${launchValue}&land_success=${landingValue}&launch_year=${selectedYear}`;
      }
    } else {
      filteredUrl = `?limit=100&launch_success=${launchValue}&land_success=${landingValue}&launch_year=${selectedYear}`;
    }

    let url = baseUrl + filteredUrl;
    setIsLoader(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoader(false);
        setProductData(data);
        history.replace(filteredUrl);
      })
      .catch((err) => {
        console.log("NETWORK ERROR", err);
      });
  }, [selectedYear, launchValue, landingValue]);
  return (
    <main className={styles.containerCard}>
      <header>
        <h4>SpaceX Lanch Programs</h4>
      </header>
      <section className="row">
        <aside className="col-sm-12 col-md-5 col-lg-3">
          <YearCardComponent
            setYear={setYear}
            setLaunchValue={setLaunchValue}
            setLandingValue={setLandingValue}
            setDblClick={setDblClick}
          />
        </aside>
        <section className="col-sm-12 col-md-7 col-lg-9 ">
          <div className="row">
            {!isLoader ? (
              productData.map((val) => {
                return (
                  <div
                    key={val.flight_number}
                    className="col-sm-12 col-md-6 col-lg-3"
                  >
                    <MissionCardComponent {...val} />
                  </div>
                );
              })
            ) : (
              <div className="spinner-border m-5" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </div>
          {productData.length === 0 && <div>No Data Found</div>}
        </section>
        <footer>Developed By: Dheeraj Joshi</footer>
      </section>
    </main>
  );
};

export default Home;
