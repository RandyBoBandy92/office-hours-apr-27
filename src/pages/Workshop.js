import { useEffect, useReducer, useState } from "react";
import MediaQuery from "../components/MediaQuery";

function WorkShop() {
  return (
    <div>
      <MediaQuery
        query={"(max-width: 768px)"}
        mobile={<h1>Mobile</h1>}
        desktop={<h1>Desktop</h1>}
        // Desktop Layout
        // Mobile Layout
      />
    </div>
  );
}

export default WorkShop;
