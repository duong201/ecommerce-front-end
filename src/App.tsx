import React from "react";
import "./styles/GlobalStyle.css";
import Button from "./components/Button/Button";

const App: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <Button
        text="Quần nam"
        onClick={handleClick}
        type="btnAddToCart"
        showLabel={true}
      />
    </div>
  );
};

export default App;
