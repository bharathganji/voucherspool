import React from "react";
import ActionAreaCard from "./ActionAreaCard";
import ButtonAppBar from "./AppBar";
import "./HomePage.css";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Divider } from "@mui/material";
import FixedBottomNavigation from "../BottomNavigation";

export default function HomePage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <ButtonAppBar />
      <Divider sx={{marginBottom:'30px'}}/>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
        <ActionAreaCard />
        </Grid>
        <Grid item xs={6} md={6}>
        <ActionAreaCard />
        </Grid>
        <Grid item xs={6} md={6}>
        <ActionAreaCard />
        </Grid>
        <Grid item xs={6} md={6}>
        <ActionAreaCard />
        </Grid>
      </Grid>
    <Paper  sx={{marginBottom:'100px'}}></Paper>
    {/* <FixedBottomNavigation/> */}
    </div>
  );
}
