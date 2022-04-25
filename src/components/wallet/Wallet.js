import React from "react";
import Paper from "@mui/material/Paper";
import "./Wallet.css";
import HistoryIcon from "@mui/icons-material/History";
import rupee from "../../../src/assets/rupee.webp";
import Button from "@mui/material/Button";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";

import { Link, Navigate, Outlet } from "react-router-dom";
import FixedBottomNavigation from "../BottomNavigation";
import { motion } from "framer-motion";

function handleAddCash(param) {
  console.log(param);
  <Navigate to={param} />;
}
export default function Wallet() {
  const walletTypes = [
    {
      type: "Deposit wallet",
      amount: 0,
      description: ` can be used to participate in pools & Buy vouchers from store.
       \n cannot be withdrawn, 
       kindly use to withdraw in the form of vouchers`,
      link: "/add-deposit-wallet",
      value: "add cash",
    },
    {
      type: "Ads wallet",
      amount: 0,
      description: "can be used to participate in pools",
      link: "/add-ads-wallet",
      value: "earn cash",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Paper elevation={1} className="order-history">
        <HistoryIcon color="primary" /> Order History
      </Paper>

      {walletTypes.map((wallet) => (
        <Paper
          key={wallet.type}
          elevation={1}
          sx={{
            color: "white",
          }}
          className="wallet"
        >
          <div className="wallet-amount">
            <img alt="rupees: " src={rupee} className="wallet-rupee-img" />

            {wallet.amount}
          </div>
          <div className="wallet-type">{wallet.type}</div>
          <div className="wallet-description">{wallet.description}</div>
          <Button
            variant="contained"
            size="small"
            startIcon={<CurrencyRupeeRoundedIcon />}
            color="success"
            to={wallet.link}
            component={Link}
          >
            {wallet.value}
          </Button>
        </Paper>
      ))}

      {/* <FixedBottomNavigation/> */}
    </motion.div>
  );
}
