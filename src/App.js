import React from 'react';
import './App.css';
import Title from "./components/Title";

function App() {
  return (
    <div>
      <h1>Styled Components</h1>
      <h2 style={{color: "red", textTransform: "uppercase"}}>inline styes</h2>
      <h3 className="global">global css</h3>
      <h2 className="first">First</h2>
      <h3 className="second">Second</h3>
      <Title />
    </div>
  );
}

export default App;
