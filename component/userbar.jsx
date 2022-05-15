import { Button, Grid } from "@material-ui/core";
import { ExpandMore, Menu, CropFree } from "@material-ui/icons";
import Image from "next/image";
import style from "../styles/userbar.module.css";
import React from "react";

function UserBar() {
  return (
    <>
      <Grid container className={style.userBar}>
        <Grid item sm={7} xs={10}>
          <Button>
            <Menu fontSize="medium"></Menu>
          </Button>
        </Grid>
        <Grid
          item
          sm={5}
          xs={2}
          container
          style={{ justifyContent: "end", flexWrap: "nowrap" }}
        >
          <Button>
            <CropFree fontSize="medium"></CropFree>
          </Button>
          <Button endIcon={<ExpandMore fontSize="medium"></ExpandMore>}>
            <Image
              src="/user.png"
              width={40}
              height={40}
              alt="user-photo"
            ></Image>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
export default UserBar;
