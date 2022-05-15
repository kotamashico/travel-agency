import Link from "next/link";
import { useState } from "react";
import { Button, Collapse, Grid, Typography } from "@material-ui/core";
import Image from "next/image";
// import User from "./user.png";
import {
  AirplanemodeActive,
  ChevronLeft,
  ChevronRight,
} from "@material-ui/icons";
import style from "../styles/sidebar.module.css";

function SideBar({ children }) {
  const [hover, setHover] = useState(false);
  const [first, setfirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [firstItem, setfirstItem] = useState(false);
  const [secondItem, setSecondItem] = useState(false);

  function handleOnClick() {
    setfirst((prev) => !prev);
  }
  return (
    <Grid container direction="row" wrap="nowrap">
      <Grid
        item
        className={style.sideBar}
        direction="column"
        container
        onMouseLeave={() => {
          setfirst(false);
          setSecond(false);
          setfirstItem(false);
        }}
        onMouseEnter={() => {
          setSecond(true);
          setfirstItem(true);
        }}
      >
        <Grid
          container
          direction="column"
          className={style.userProfile}
          style={{
            height: second ? "211px" : 0,
            width: "100",
            visibility: second ? "visible" : "hidden",
          }}
        >
          <Image src="/user.png" width="35%" height="35%" alt="user"></Image>
          <Typography
            variant="h5"
            style={{
              visibility: second ? "visible" : "hidden",
            }}
          >
            alex johonson
          </Typography>
          <Typography
            variant="h6"
            style={{
              visibility: second ? "visible" : "hidden",
            }}
          >
            alex.johnson@gmail.com
          </Typography>
        </Grid>
        {/*------------------------------- first button ----------------------- */}
        <Grid container direction="column" className="sidebarItem">
          <Button
            onClick={handleOnClick}
            style={{ justifyContent: "space-around" }}
          >
            <AirplanemodeActive
              style={{ marginLeft: "-20px" }}
            ></AirplanemodeActive>
            <Grid item style={{ display: firstItem ? "block" : "none" }}>
              Flight
            </Grid>
            {first ? (
              <ChevronLeft />
            ) : (
              <ChevronRight style={{ display: firstItem ? "block" : "none" }} />
            )}
          </Button>

          <Collapse in={first} timeout={90} className="listItems">
            <ul
              style={{ display: first ? "block" : "none" }}
              className={style.options}
            >
              <li>search</li>
              <li>data grid</li>
              <li>queue</li>
            </ul>
          </Collapse>
        </Grid>
        {/*------------------------------- second button ----------------------- */}
        {/* <Grid container direction="column" className="sidebarItem">
            <Button
              onClick={handleOnClick}
              style={{ justifyContent: "space-around" }}
            >
              <AirplanemodeActive
                style={{ marginLeft: "-20px" }}
              ></AirplanemodeActive>
              <Grid item style={{ display: firstItem ? "block" : "none" }}>
                Flight
              </Grid>
              {first ? (
                <ChevronLeft />
              ) : (
                <ChevronRight
                  style={{ display: firstItem ? "block" : "none" }}
                />
              )}
            </Button>

            <Collapse in={first} timeout={90} className="listItems">
              <ul
                style={{ display: first ? "block" : "none" }}
                className={style.options}
              >
                <li>search</li>
                <li>data grid</li>
                <li>queue</li>
              </ul>
            </Collapse>
          </Grid> */}
      </Grid>

      {/* different route such as "/ and ..." passed as children prop to this component  */}
      <Grid item className={style.rest}>
        {children}
      </Grid>
    </Grid>
  );
}

export default SideBar;
