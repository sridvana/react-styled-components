import React from 'react';
import './App.css';
import { Button, SecondButton } from './Buttons';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      {/* hello from app */}
      <Button>Click me</Button>
      <SecondButton>Click me</SecondButton>
    </div>
  );
}

export default App;
