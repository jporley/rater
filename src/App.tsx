import React from "react";
import "./App.css";
import logo from "../logo/logo.png";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to </p> <img src={logo} />
      </header>
    </div>
  );
};

export default App;
