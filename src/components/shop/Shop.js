import { Paper } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { supabaseClient } from "../../supabase";
import FixedBottomNavigation from "../BottomNavigation";
import GridView from "./GridView";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import SelectionBar from "./SelectionBar";
import VouchersListView from "./VouchersListView";

async function fetchdata() {
  let { data: vouchers, error } = await supabaseClient
    .from("vouchers")
    .select("*");

  if (error) throw error;
  return vouchers;
}

export default function Shop(props) {
  const [VoucherData, setVoucherData] = useState();
  const [VoucherData_original, setVoucherData_original] = useState();
  const [loading, setloading] = useState(false);

  const filterData = (params) => {
    setVoucherData(
      VoucherData_original.filter((voucher) => voucher.category === params)
    );
  };

  const handleVouchers = (params) => {
    console.log("called handlevouchers", params);
    switch (params) {
      case 0:
        setVoucherData(VoucherData_original);
        break;
      case 1:
        filterData("ecommerce");
        break;
      case 2:
        filterData("entertainment");
        break;
      case 3:
        filterData("fashion&lifestyle");
        break;
      case 4:
        filterData("food&drinks");
        break;
      case 5:
        filterData("gaming&esports");
        break;
      case 6:
        filterData("grocery&homeessentials");
        break;
      case 7:
        filterData("travel");
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    setloading(true);
    fetchdata()
      .then((data) => {
        setVoucherData_original(data);
        setVoucherData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  // if (loading) {
  //   return (
  //     <div>
  //       <h1>loading...</h1>
  //     </div>
  //   );
  // }
  if (VoucherData === undefined || loading) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* hello */}
      <PrimarySearchAppBar />
      <SelectionBar handleVoucherData={(params) => handleVouchers(params)} />
      <GridView VoucherData={VoucherData} />
      {/* <VouchersListView VoucherData={VoucherData} /> */}
      
      <Paper  sx={{marginBottom:'100px'}}></Paper>
    </motion.div>
  );
}
