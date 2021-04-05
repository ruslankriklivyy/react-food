import React from 'react';
import { observer } from 'mobx-react-lite';
import styled, { createGlobalStyle } from 'styled-components';

import { Home } from './components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Karla', sans-serif;
  }
  html, body {
    margin: 0;
    width: 100%;
    padding: 0;
    color: #202020;
    background-color: #FFE2BA;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
  ul,li {
    list-style: none;
  }
`;

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
`;

const AppWrapper = styled.div`
  padding: 30px;
`;

const App = observer(() => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Home />
    </AppWrapper>
  );
});

export default App;
