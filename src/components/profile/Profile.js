import React from "react";
import "./Profile.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ArrowBackIosNew, Backspace } from "@mui/icons-material";
import { Navigate } from "react-router-dom";
import InsetDividers from "./Divider";
import { display } from "@mui/system";
import FixedBottomNavigation from "../BottomNavigation";

export default function Profile() {
  return (
    <React.Fragment>
      <div className="frame">
        <div className="center">
          <div className="profile">
            <div className="image">
              <div className="circle-1"></div>
              <div className="circle-2"></div>
              <img
                src="https://100dayscss.com/codepen/jessica-potter.jpg"
                width="70"
                height="70"
                alt="Jessica Potter"
              />
            </div>

            <div className="name">full name</div>
            <div className="job">phone number</div>

            <div className="actions">
              <label>KYC status </label>
              <label>✔ ⛔ </label>
              <br />
              {/* <br /> */}
              <label>Email </label>
              <label>****************</label>
              <button className="btn">Follow</button>
            </div>
          </div>

          <div className="stats">
            <div className="box">
              <span className="parameter">Vouchers Won</span>
              <span className="value">523</span>
            </div>
            <div className="box">
              <span className="value">1387</span>
              <span className="parameter">Likes</span>
            </div>
            <div className="box">
              <span className="value">146</span>
              <span className="parameter">Follower</span>
            </div>
          </div>
        </div>
      </div>

      <InsetDividers />
      {/* <FixedBottomNavigation/> */}
    </React.Fragment>
  );
}
