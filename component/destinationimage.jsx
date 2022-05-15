import { Button, Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import style from "../styles/destinationimages.module.css";
const images = [
  {
    id: 1,
    type: "newyork",
    name: "tehran",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 2,
    type: "losangeles",
    name: "london",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 3,
    type: "washington",
    name: "zarghan",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 4,
    type: "london",
    name: "esfahan",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 5,
    type: "iran",
    name: "esfahan",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 5,
    type: "iran",
    name: "esfahan",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 5,
    type: "iran",
    name: "esfahan",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 5,
    type: "iran",
    name: "esfahan",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 5,
    type: "iran",
    name: "esfahan",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 5,
    type: "iran",
    name: "esfahan",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

function DestinationImage() {
  return (
    <>
      <Grid container className={style.seeMore}>
        <Grid item>
          <Typography
            variant={"h5"}
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "38px",
            }}
          >
            Destinations you can travel to now
          </Typography>
          <Typography
            variant={"h6"}
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "19px",
            }}
          >
            Popular destinations open to most visitors from Iran
          </Typography>
        </Grid>
        <Grid item style={{ alignSelf: "center" }}>
          <Button color="primary" variant="contained" hidden>
            see all
          </Button>
        </Grid>
      </Grid>

      <Grid container item direction="row" className={style.destinations}>
        {images.map((image) => (
          <Grid item key={image.id}>
            <Image
              className="travel-image"
              src={`https://source.unsplash.com/random/255x255/?${image.type}`}
              width={255}
              height={255}
              alt={image.id}
            ></Image>

            <Typography variant="h4">{image.name}</Typography>
            <Typography variant="h6">{image.discription}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default DestinationImage;
