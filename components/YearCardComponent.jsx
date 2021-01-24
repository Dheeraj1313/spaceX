import React, { useCallback, memo, useState, useEffect } from "react";
import styles from "./style.module.css";
import { ButtonGroup, Card, ToggleButton } from "react-bootstrap";

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
  const {
    setYear,
    setLaunchValue,
    setLandingValue,
    setDblClick,
    urlYearValue,
    urlLaunchValue,
    urlLandingValue,
  } = props;
  const [radioValue, setRadioValue] = useState("");
  const [landRadioValue, setlandRadioValue] = useState("");
  const [launchRadioValue, setlaunchRadioValue] = useState("");

  const setData = (value, filterType) => {
    switch (filterType) {
      case "year":
        setRadioValue(value);
        setYear(value);
        break;
      case "launchSucess":
        setlaunchRadioValue(value);
        setLaunchValue(value);
        break;
      case "landSucess":
        setlandRadioValue(value);
        setLandingValue(value);
        break;
      default:
        setYear("");
        setLaunchValue("");
        setLandingValue("");
    }
  };
  let clickTimeout = null;
  const clickHandler = useCallback((val, filterType) => {
    if (clickTimeout !== null) {
      setData("", filterType);
      setDblClick(true);
      clearTimeout(clickTimeout);
      clickTimeout = null;
    } else {
      clickTimeout = setTimeout(() => {
        clearTimeout(clickTimeout);
        clickTimeout = null;
        setDblClick(false);
        setData(val, filterType);
      }, 300);
    }
  });

  return (
    <Card className={styles.innerCardGrid}>
      <Card.Body>
        <Card.Title className="row">Filter</Card.Title>
        <Card.Text className="row justify-content-center">
          <u>Launch year</u>
        </Card.Text>

        <ButtonGroup toggle className={`d-flex flex-wrap ${styles.btnGroup}`}>
          {yearArr.map((year, i) => {
            return (
              <ToggleButton
                className={`m-2 flex-grow-1 text-center ${styles.tglBtn}`}
                key={year}
                type="radio"
                name="radio"
                checked={radioValue == year || urlYearValue == year}
                onClick={(evt) => {
                  evt.preventDefault();
                  clickHandler(year, "year");
                }}
              >
                {year}
              </ToggleButton>
            );
          })}
        </ButtonGroup>
        <Card.Text className="row justify-content-center">
          <u>Sucessful Launch</u>
        </Card.Text>
        <ButtonGroup toggle className={`d-flex flex-wrap ${styles.btnGroup}`}>
          <ToggleButton
            className={`m-2 flex-grow-1 text-center ${styles.tglBtn}`}
            key={1}
            type="radio"
            name="radio"
            checked={launchRadioValue == "true" || urlLaunchValue == "true"}
            onClick={(evt) => {
              evt.preventDefault();
              clickHandler("true", "launchSucess");
            }}
          >
            true
          </ToggleButton>
          <ToggleButton
            className={`m-2 flex-grow-1 text-center ${styles.tglBtn}`}
            key={2}
            type="radio"
            name="radio"
            checked={launchRadioValue === "false" || urlLaunchValue == "fale"}
            onClick={(evt) => {
              evt.preventDefault();
              clickHandler("false", "launchSucess");
            }}
          >
            false
          </ToggleButton>
        </ButtonGroup>
        <Card.Text className="row justify-content-center">
          <u>Sucessful Landing</u>
        </Card.Text>
        <ButtonGroup toggle className={`d-flex flex-wrap ${styles.btnGroup}`}>
          <ToggleButton
            className={`m-2 flex-grow-1 text-center ${styles.tglBtn}`}
            key={1}
            type="radio"
            name="radio"
            checked={landRadioValue === "true" || urlLandingValue == "true"}
            onClick={(evt) => {
              evt.preventDefault();
              clickHandler("true", "landSucess");
            }}
          >
            true
          </ToggleButton>
          <ToggleButton
            className={`m-2 flex-grow-1 text-center ${styles.tglBtn}`}
            key={2}
            type="radio"
            name="radio"
            checked={landRadioValue === "false" || urlLandingValue == "false"}
            onClick={(evt) => {
              evt.preventDefault();
              clickHandler("false", "landSucess");
            }}
          >
            false
          </ToggleButton>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};
export default memo(YearCardComponent);
