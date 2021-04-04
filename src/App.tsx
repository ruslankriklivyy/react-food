import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Header } from './components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Karla', sans-serif;
  }
  html, body {
      margin: 0;
      width: 100%;
      padding: 0;
  }
`;

function App() {
  return (
    <GlobalStyle>
      <Header />
    </GlobalStyle>
  );
}

export default App;
