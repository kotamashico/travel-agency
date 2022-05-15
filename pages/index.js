import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import UserBar from "../component/userbar";
import SearchFlights from "../component/searchflights";
import { Typography } from "@material-ui/core";
import DestinationImage from "../component/destinationimage";
export default function Home() {
  return (
    <>
      <UserBar></UserBar>
      <SearchFlights></SearchFlights>
      <DestinationImage></DestinationImage>
    </>
  );
}
