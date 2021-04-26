import React from 'react';
import styled from 'styled-components';

import { Categories, Header, Food } from '.';
import { Container } from '../App';
import Cart from './Cart';

const HomeWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  border-radius: 30px;
  background-color: #faf9fb;
`;

const HomeLeft = styled.div`
  width: 100%;
`;

const HomeRight = styled.div`
  position: absolute;
  top: 0;
  ${(props: HomeStyledProps) => (props.show ? 'right: 0;' : 'right: -30%;')}
  height: 100%;
  bottom: 0;
  background-color: #fff;
  overflow: auto;
  z-index: 200;
  width: 27%;
  transition: all 0.3s ease;
  &::-webkit-scrollbar {
    width: 0;
  }
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
`;

interface HomeStyledProps {
  show: boolean;
}

const Home = () => {
  const [visibleCart, setVisibleCart] = React.useState(false);

  const handleVisibleCart = () => {
    setVisibleCart(!visibleCart);
  };

  const cancelCart = () => {
    setVisibleCart(false);
  };

  return (
    <Container>
      <HomeWrapper>
        <HomeLeft>
          <Header onHandleVisibleCart={handleVisibleCart} />
          <Categories />
          <Food />
        </HomeLeft>
        <HomeRight show={visibleCart}>
          <Cart onCancelCart={cancelCart} />
        </HomeRight>
      </HomeWrapper>
    </Container>
  );
};

export default Home;
