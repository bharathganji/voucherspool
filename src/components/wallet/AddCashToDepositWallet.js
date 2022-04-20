import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { fontSize, padding } from "@mui/system";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { Button } from "@mui/material";
import "./AddCashToDepositWallet.css";
export default function AddCashToDepositWallet() {
  const [selectedValue, setSelectedValue] = React.useState(10);
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {}, [selectedValue]);

  return (
    <div className="addcash">
      <Paper
        elevation={1}
        sx={{
          margin: "10px 10px",
          padding: "20px 20px",
        }}
      >
        <h3>Choose amount to add</h3>
      </Paper>

      <TextField
        sx={{
          margin: "20px 20px",
        }}
        id="standard-helperText"
        label="Enter Amount"
        helperText="amount in indian rupees"
        variant="standard"
        value={selectedValue}
      />
      <FormControl
        sx={{
          margin: "10px 10px",
          padding: "20px 20px",
        }}
      >
        <FormLabel id="demo-row-radio-buttons-group-label">
          Select Amount
        </FormLabel>
        <RadioGroup
          row
          defaultValue="10"
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="10"
            control={<Radio />}
            label="10"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="25"
            control={<Radio />}
            label="25"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="50"
            control={<Radio />}
            label="50"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="100"
            control={<Radio />}
            label="100"
            labelPlacement="bottom"
          />
        </RadioGroup>
      </FormControl>
      <Button variant="contained" size="medium">
        PROCEED TO ADD CASH
      </Button>
    </div>
  );
}
