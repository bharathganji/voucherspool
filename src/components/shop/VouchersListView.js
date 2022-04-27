import React from "react";
import FixedBottomNavigation from "../BottomNavigation";

export default function VouchersListView(props) {
  return (
    <div>
      {props.VoucherData.map((voucher) => (
        <div id={voucher.title}> {voucher.title}</div>
      ))}
    </div>
  );
}
