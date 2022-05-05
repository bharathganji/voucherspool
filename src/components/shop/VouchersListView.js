import React from "react";
import { useParams } from "react-router-dom";

export default function VouchersListView(props) {
  const { id } = useParams();
  return (
    <div>
      {/* <h2>{props.match.params.id}</h2>  */}
      <h2>{id}</h2>
    </div>
  );
}
