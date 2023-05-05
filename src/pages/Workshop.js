import { useEffect, useReducer, useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getEvenNumbersOnly = (numbersArray) => {
  const evenNumbers = numbersArray.filter((num) => {
    return num % 2 == 0; // this will be true.. when the number is even
  });
  debugger;
  return evenNumbers;
};

const evenNumbersOnly = getEvenNumbersOnly(numbers);

const doubleTheNumbers = (numbersArray) => {
  const doubledNumbers = numbersArray.map((num) => {
    return num * 2;
  });
  return doubledNumbers;
};

const doubledNumbers = doubleTheNumbers(numbers);

function Number({ number }) {
  return <h2>{number}</h2>;
}

function WorkShop() {
  const renderNumbers = (numbersToRender) => {
    const numberComponents = numbersToRender.map((num) => {
      return <Number key={num} number={num} />;
    });
    return numberComponents;
  };

  // {[<Number key={7} number={7} />, <Number key={14} number={14} />]}
  // <div className="numbers">{renderNumbers(numbers)}</div>
  // <div className="numbers">{renderNumbers(doubledNumbers)}</div>
  return (
    <div>
      <h1>Workshop</h1>
      <div className="numbers">{renderNumbers(evenNumbersOnly)}</div>
    </div>
  );
}

export default WorkShop;
