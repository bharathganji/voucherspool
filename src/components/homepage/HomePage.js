import React from "react";
import ActionAreaCard from "./ActionAreaCard";
import ButtonAppBar from "./AppBar";
import "./HomePage.css";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Divider } from "@mui/material";
import FixedBottomNavigation from "../BottomNavigation";
import ScrollBackground from "../login/ScrollBackground";

export default function HomePage() {
  const [games, setgames] = React.useState([]);
  const axios = require("axios").default;
  let gamesarray = games.sort((a,b)=>b.gamePlays-a.gamePlays).slice(0, 10).map((data) => {
    return (
      <Grid item xs={6} md={6} key={data.code}>
        <ActionAreaCard data={data} />
      </Grid>
    );
  });
  React.useEffect(() => {
    axios
      .get("https://pub.gamezop.com/v3/games?id=4656&lang=en")
      .then((res) => {
        setgames(res.data.games);
        return res.data;
      })
      // .then((res) => console.log(res.games))
      .catch((err) => setgames(err));
  }, []);

  return (
    <div>
      <ButtonAppBar />
      <Divider sx={{ marginBottom: "30px" }} />
      <Grid container spacing={2}>
        {gamesarray}
      </Grid>

      {/* <ScrollBackground/> */}
      <Paper sx={{ marginBottom: "100px" }}></Paper>
    </div>
  );
}
