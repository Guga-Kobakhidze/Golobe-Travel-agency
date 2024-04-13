"use client";

import { Box } from "@mui/material";
import React, { useState } from "react";
import { SearchContent } from "./SearchModalStyle";
import Nav from "../header/Nav";
import { Flights, Passenger } from "@/data/FormData";
import FlightForm from "./FlightForm";

const SearchModal = () => {
  const [flightForm, setFlightForm] = useState<boolean>(true);
  const [staysForm, setStaysForm] = useState<boolean>(false);
  // const [pathName, setPathName] = useState<string>("flight");

  const FlightData = Flights;
  const PassengerData = Passenger;

  const flightClick = () => {
    setFlightForm(true);
    setStaysForm(false);
    // setPathName("flight");
  };

  const staysClick = () => {
    setStaysForm(true);
    setFlightForm(false);
    // setPathName("stays");
  };

  return (
    <Box sx={{ ...SearchContent }}>
      <Nav
        color="black"
        navigation={false}
        flyClick={flightClick}
        stayClick={staysClick}
        flight={flightForm}
        stays={staysForm}
      />
      <Box>
        <FlightForm fromToData={FlightData} passData={PassengerData} />
      </Box>
    </Box>
  );
};

export default SearchModal;
