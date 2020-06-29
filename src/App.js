import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import img1 from "./images/image-1.jpeg";
import img2 from "./images/image-2.jpeg";
import { DangerButton } from './examples/PropsButton';

function App() {
  return (
    <div>
      {/* <Hero img="./images/image-1.jpeg" /> */}
      <Hero img={img1} >
        <Banner title="this is my title" color='white'>
          <DangerButton>Click me</DangerButton>
        </Banner>
      </Hero>
      <Hero img={img2} />
      <Hero big/>
    </div>
  );
}

export default App;
