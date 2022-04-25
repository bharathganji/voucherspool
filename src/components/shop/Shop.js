import { motion } from "framer-motion";
import React from "react";
import FixedBottomNavigation from "../BottomNavigation";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import SelectionBar from "./SelectionBar";

export default function Shop() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PrimarySearchAppBar />
      <SelectionBar />
      {/* <FixedBottomNavigation/> */}
    </motion.div>
  );
}
