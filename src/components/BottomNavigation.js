import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { Link, Navigate, Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import {
  AccountBalanceWallet,
  EmojiEvents,
  Home,
  Person,
  AddShoppingCart,
} from "@mui/icons-material";

// function refreshMessages() {
//   const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

//   return Array.from(new Array(10)).map(
//     () => messageExamples[getRandomInt(messageExamples.length)]
//   );
// }

export default function FixedBottomNavigation() {
  //   const pathname = window.location.pathname;
  //   const [value, setValue] = React.useState(pathname);
  //   const onChange = (event, newValue) => {
  //     setValue(newValue);
  //   };
  //   return (
  //     <>
  //       <BottomNavigation value={value} onChange={onChange}>
  //         <BottomNavigationAction
  //           component={Link}
  //           to={"/1"}
  //           value={"/1"}
  //           label={"Home"}
  //           icon={<FavoriteIcon />}
  //         />
  //         <BottomNavigationAction
  //           component={Link}
  //           to={"/2"}
  //           value={"/2"}
  //           label={"Home"}
  //           icon={<RestoreIcon />}
  //         />

  //         <BottomNavigationAction
  //           component={Link}
  //           to={"/3"}
  //           value={"/3"}
  //           label={"Home"}
  //           icon={<ArchiveIcon />}
  //         />
  //         {/* <BottomNavigationAction component={Link} to={'/another-route'} value={'/another-route'} label={'Favourites'} icon={<FavoriteIcon/>} /> */}
  //       </BottomNavigation>
  //       <Outlet />

  //     </>
  //   );
  // const pathname = window.location.pathname=='/'?'/pools':'/';
  // console.log(pathname);
  const [value, setValue] = React.useState("/shop");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      {/* <Container maxWidth="sm"> */}
      <Outlet />
      <CssBaseline />

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels={true}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="pools"
            icon={<Home />}
            to={"/pools"}
            value={"/pools"}
            component={Link}
          />
          <BottomNavigationAction
            label="Profile"
            icon={<Person />}
            to={"/profile"}
            value={"/profile"}
            component={Link}
          />
          <BottomNavigationAction
            label="History"
            icon={<EmojiEvents />}
            to={"/history"}
            value={"/history"}
            component={Link}
          />
          <BottomNavigationAction
            label="Wallet"
            icon={<AccountBalanceWallet />}
            to={"/wallet"}
            value={"/wallet"}
            component={Link}
          />
          <BottomNavigationAction
            label="shop"
            icon={<AddShoppingCart />}
            to={"/shop"}
            value={"/shop"}
            component={Link}
          />
        </BottomNavigation>
      </Paper>
    </React.Fragment>
    //  </Container>
  );
}
