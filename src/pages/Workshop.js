import { useEffect, useReducer, useState, useRef } from "react";
import MediaQuery from "../components/MediaQuery";

function WorkShop() {
  const [isLarge, setIsLarge] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        setIsLarge(width >= 400);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      <div style={{ color: isLarge ? "red" : "black" }} className="test">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quae
          veritatis quibusdam! Laboriosam delectus facilis excepturi dolor
          numquam. Quos veritatis repudiandae nisi libero deleniti illum laborum
          harum doloribus doloremque voluptas!
        </h1>
      </div>
    </div>
  );
}

export default WorkShop;

// import React, { useEffect, useState, useRef } from 'react';

// function MyComponent({ text }) {
//   const [isLarge, setIsLarge] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new ResizeObserver(entries => {
//       for (let entry of entries) {
//         const {width} = entry.contentRect;
//         setIsLarge(width >= 600);
//       }
//     });

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   const wordLimit = isLarge ? 100 : 50;

//   // Limit the words here as per your requirement

//   return (
//     <div ref={ref} className={isLarge ? 'large' : 'small'}>
//       {text}
//     </div>
//   );
// }
