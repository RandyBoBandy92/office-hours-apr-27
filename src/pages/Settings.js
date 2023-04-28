import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

const Settings = () => {
  const { state, changeColor } = useContext(AppContext);
  const { settings } = state;

  const colors = ["red", "blue", "green"];

  return (
    <div style={{ color: settings.color }}>
      <h1>Settings:</h1>
      <select
        onChange={(event) => {
          changeColor(event.target.value);
        }}
      >
        {colors.map((color) => (
          <option
            key={color}
            value={color}
            selected={settings.color == color ? "selected" : false}
          >
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Settings;
