import { createContext, useReducer } from "react";

const AppContext = createContext();
//
const initialState = {
  settings: {
    color: "red",
    language: "english",
  },
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "CHANGE_COLOR":
        return {
          ...state,
          settings: {
            ...state.settings,
            color: action.data,
          },
        };
      default:
        break;
    }
  }, initialState);

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", data: color });
  };
  // example: changeColor("blue");

  // Example
  // dispatch({type: "CHANGE_COLOR", data: "blue"})

  return (
    <AppContext.Provider value={{ state, changeColor }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext };

export default AppProvider;
