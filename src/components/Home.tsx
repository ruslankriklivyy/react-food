import React from 'react';
import styled from 'styled-components';

import { Categories, Header, Food } from '.';
import { Container } from '../App';
import Cart from './Cart';

const HomeWrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 30px;
  background-color: #faf9fb;
`;

const HomeLeft = styled.div`
  width: 73%;
`;

const HomeRight = styled.div`
  width: 27%;
`;

const Home = () => {
  return (
    <Container>
      <HomeWrapper>
        <HomeLeft>
          <Header />
          <Categories />
          <Food />
        </HomeLeft>
        <HomeRight>
          <Cart />
        </HomeRight>
      </HomeWrapper>
    </Container>
  );
};

export default Home;
