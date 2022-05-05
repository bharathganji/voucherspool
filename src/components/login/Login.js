import React, { useEffect, useState } from "react";
import { supabaseClient } from "../../supabase";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import "./login.css";
import { Button, FormHelperText, OutlinedInput, Paper } from "@mui/material";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import { ChakraProvider } from "@chakra-ui/react";
import Account from "./Account";
import Auth from "../../contexts/Auth";
import theme from './theme'

export default function Login() {
  const [session, setSession] = useState();
  const [helperText, sethelperText] = useState(" ");
  const handleMobileNumber = (e) => {
    console.log(e.target.value.length);

    if (e.target.value.length != 10) {
      console.log("less");
      sethelperText("Enter a valid mobile number");
    }
  };
  useEffect(() => {
    setSession(supabaseClient.auth.session());

    supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user?.id} session={session} />
      )}
    </ChakraProvider>
    // <React.Fragment>
    //   <div className="login">
    //     <h1>Sign in or Sign up</h1>
    //     <Paper elevation={1}>
    //       <TextField
    //         label="Mobile Number"
    //         id="outlined-start-adornment"
    //         sx={{ m: 1, width: "25ch" }}
    //         onChange={handleMobileNumber}
    //         InputProps={{
    //           startAdornment: (
    //             <InputAdornment position="start">+91</InputAdornment>
    //           ),
    //         }}
    //       />
    //     </Paper>
    //     <h5 style={{ color: "red" }} >{helperText}</h5>
    //     <Button variant="contained" sx={{ flexBasis: "fit-content" }}>
    //       CONTINUE
    //     </Button>
    //   </div>
    // </React.Fragment>
  );
}
