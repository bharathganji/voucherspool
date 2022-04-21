import * as React from "react";

import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

export default function SelectionBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        // centered
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        <Tab label="All" />
        <Tab
          icon={<ShoppingCartIcon />}
          label="E-commerce AnD Online"
          iconPosition="start"
        />
        <Tab
          label="gaming and esports"
          icon={<SportsEsportsIcon />}
          iconPosition="start"
        />
        <Tab
          label="Entertainment"
          icon={<TheaterComedyIcon />}
          iconPosition="start"
        />
        <Tab
          label="food & Drink"
          icon={<FastfoodIcon />}
          iconPosition="start"
        />
        <Tab
          label="Grocery & Home Essentials"
          icon={<LocalGroceryStoreIcon />}
          iconPosition="start"
        />
        <Tab
          label="Fashion &Lifestyle"
          iconPosition="start"
          icon={<CheckroomIcon />}
        />
        <Tab label="Travel" iconPosition="start" icon={<TravelExploreIcon />} />
      </Tabs>
    </Box>
  );
}
