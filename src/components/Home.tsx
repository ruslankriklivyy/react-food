import React from 'react';
import styled from 'styled-components';

import { Container } from 'App';
import { device } from 'utils/deviceMedia';
import { Cart } from 'components/Cart';
import { Categories } from 'components/Categories';
import { Food } from 'components/Food';
import { Header } from 'components/Header';

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

const CartBlockOut = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 400;
  background: rgba(251, 147, 0, 0.3);
  transition: all 0.2s ease;
  ${(props: HomeStyledProps) =>
    props.show ? 'visibility: visible;' : 'visibility: hidden;'}
  ${(props: HomeStyledProps) => (props.show ? 'opacity: 1;' : 'opacity: 0;')}
`;

const HomeRight = styled.div`
  position: absolute;
  top: 0;
  ${(props: HomeStyledProps) => (props.show ? 'right: 0;' : 'right: -35%;')}
  height: 100%;
  bottom: 0;
  background-color: #fff;
  overflow: auto;
  z-index: 200;
  width: 35%;
  transition: all 0.3s ease;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  z-index: 400;
  &::-webkit-scrollbar {
    width: 0;
  }
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  @media ${device.laptopL} {
    width: 40%;
    ${(props: HomeStyledProps) => (props.show ? 'right: 0;' : 'right: -40%;')}
  }
  @media ${device.tablet} {
    width: 100%;
    ${(props: HomeStyledProps) => (props.show ? 'right: 0;' : 'right: -100%;')}
  }
`;

interface HomeStyledProps {
  show: boolean;
}

export const Home = () => {
  const [visibleCart, setVisibleCart] = React.useState(false);

  const handleVisibleCart = () => {
    setVisibleCart(!visibleCart);
  };

  const cancelCart = () => {
    setVisibleCart(false);
  };

  return (
    <Container>
      <CartBlockOut
        data-testid={'cartBlockOut'}
        show={visibleCart}
      ></CartBlockOut>
      <HomeWrapper>
        <HomeLeft>
          <Header onHandleVisibleCart={handleVisibleCart} />
          <Categories />
          <Food />
        </HomeLeft>
        <HomeRight data-testid={'homeRight'} show={visibleCart}>
          <Cart onCancelCart={cancelCart} />
        </HomeRight>
      </HomeWrapper>
    </Container>
  );
};
