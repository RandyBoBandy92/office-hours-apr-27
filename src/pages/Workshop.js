import { useEffect, useReducer, useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Number({ number }) {
  return <h2>{number}</h2>;
}

function WorkShop() {
  const renderNumbers = (num) => {
    debugger;
    return <Number key={num} number={num} />;
  };

  return (
    <div>
      <h1>Workshop</h1>
      <div className="numbers">{numbers.map(renderNumbers)}</div>
    </div>
  );
}

export default WorkShop;
