import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import "./Divider.css";
import { CurrencyRupee, LocalActivity, MilitaryTech } from "@mui/icons-material";
export default function InsetDividers() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        // left: "10%",
        marginTop: "20px",
        marginBottom: "100px",
      }}
    >


      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalActivity />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="TICKETS AVAIABLE" secondary="** COUNT ** " />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CurrencyRupee />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="VOUCHERS WORTH WON" secondary="** AMOUNT ** " />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MilitaryTech />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="POOL'S PARTICIPATED" secondary="** COUNT ** " />
      </ListItem>
    </List>
  );
}
