import React from 'react';
import './App.css';
import AlternativeHeader from './components/AlternativeHeader';
import { createGlobalStyle } from 'styled-components';
import { PropsButton } from './components/PropsButton';
import { BigButton } from './components/PropsButton';
import { DangerButton } from './components/PropsButton';
import { SuccessButton } from './components/PropsButton';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif ;
}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <AlternativeHeader title="hello from app.js" />
      <PropsButton color="blue">Props Button One</PropsButton>
      <DangerButton padding="4rem">Danger Button </DangerButton>
      <DangerButton big>Danger Button </DangerButton>
      <SuccessButton>Success Button </SuccessButton>
      <PropsButton>Props Button Three (default color)</PropsButton>
      <BigButton>Big Button</BigButton>
    </div>
  );
}

export default App;
