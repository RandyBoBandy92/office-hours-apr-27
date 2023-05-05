import React, { useState, useEffect } from "react";

const MediaQuery = ({ query, mobile, desktop }) => {
  const [matches, setMatches] = useState(false); // state to track whether or not the matchMedia
  // is true or false

  const handleMediaChange = (e) => {
    // this is a "match" event
    setMatches(e.matches);
  };

  useEffect(() => {
    // we start tracking the size of the window, passing in our query from props
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches); // we store the initial value in state

    // every time the viewport changes, we want to update state with the new value
    mediaQueryList.addEventListener("change", handleMediaChange);

    return () => {
      // when the component unmounts, we want to get rid of this listener
      mediaQueryList.removeEventListener("change", handleMediaChange);
    };
  }, [query]);

  return matches ? mobile : desktop;
};

export default MediaQuery;
