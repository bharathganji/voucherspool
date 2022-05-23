import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import rupee from "../../../src/assets/rupee.webp";

const ActionAreaCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }} elevation={2}>
      <CardActionArea href={props.data.url}>
        <CardMedia
          component="img"
          height="140"
          image={props.data.assets.brick}
          alt="game loading.."
        />
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.name.en}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data.description.en}
          </Typography>
        </CardContent> */}
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;
