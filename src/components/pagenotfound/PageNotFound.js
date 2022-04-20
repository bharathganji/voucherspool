import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <Button variant="outlined" Component={Link} to={"shop"}>
        Go to shop
      </Button>
    </div>
  );
}
