import React, { useEffect } from "react";
import DateFnsUtils from "@date-io/date-fns";
import Image from "next/image";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  OutlinedInput,
  FormControl,
  Button,
  Typography,
} from "@material-ui/core";
import style from "../styles/searchflight.module.css";
const flights = [
  "shiraz",
  "tehran",
  "hamedan",
  "tabriz",
  "qom",
  "zarghan",
  "poshtemoleh",
  "barehaftab",
];

const ITEM_HEIGHT = 32;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5.5 + ITEM_PADDING_TOP,
      width: 217,
      scrollbarWidth: "thin",
    },
  },
};

function SearchFlights() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [origin, setOrigin] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };
  const handleDestinationcChange = (event) => {
    setDestination(event.target.value);
  };
  const handleExchangeButton = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  return (
    <>
      <Typography variant="h5" style={{ marginLeft: "5%", marginTop: "27px" }}>
        Flights
      </Typography>
      <Grid container className={style.flightType}>
        <Grid item>
          <Button>1</Button>
        </Grid>
        <Grid item>
          <Button>1</Button>
        </Grid>
        <Grid item>
          <Button>1</Button>
        </Grid>
      </Grid>
      <Grid container className={style.searchFlight}>
        <Grid item className="destination-flight" md={2}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">From?</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={origin}
              // IconComponent={() => (
              //   <Image src="/airplain.svg" width={40} height={40} alt="image" />
              // )}
              onChange={handleOriginChange}
              variant="outlined"
              // input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {flights.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={{ scrollbarColor: "red" }}
                >
                  <Image
                    src="/locationtag.svg"
                    width={23}
                    height={20}
                    alt="image"
                  />
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={1}>
          <Button onClick={handleExchangeButton}>
            <Image src="/exchange.svg" width={23} height={20} alt="image" />
          </Button>
        </Grid>
        <Grid item className="destination-flight" md={2}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">To?</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={destination}
              onChange={handleDestinationcChange}
              variant="outlined"
              // input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {flights.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={{ scrollbarColor: "red" }}
                >
                  <Image
                    src="/locationtag.svg"
                    width={23}
                    height={20}
                    alt="image"
                  />{" "}
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={5}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              autoOk
              format="MMM,dd/yyyy"
              margin="normal"
              keyboardIcon={
                <Image
                  src="/calendaricon.svg"
                  width={23}
                  height={20}
                  alt="icon"
                />
              }
              inputVariant="outlined"
              id="date-picker-inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item md={2}>
          <Button
            variant="contained"
            color="primary"
            // onClick={handleExchangeButton}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default SearchFlights;
