import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { Container } from 'App';
import { useRootStore } from 'store/RootState.Context';

import deliveryPng from 'assets/img/delivery.png';
import shoppingCartSvg from 'assets/img/shopping-cart.svg';
import userPng from 'assets/img/user.png';
import { device } from 'utils/deviceMedia';
import { Title } from 'components/Title';
import { SearchFood } from 'components/SearchFood';
import { Button } from 'components/Button';

const HeaderWrapper = styled.div`
  padding: 30px;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  @media ${device.laptop} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    h2 {
      margin-bottom: 20px;
    }
  }
`;

const HeaderInfo = styled.div`
  margin-left: 130px;
  h2 {
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 10px;
  }
  p {
    font-size: 20px;
    opacity: 0.8;
    margin-bottom: 25px;
    span {
      font-weight: 700;
      color: #fb9300;
      opacity: 1;
    }
  }
  @media ${device.laptop} {
    text-align: center;
    margin-left: 0;
  }
`;

const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  height: 300px;
  background-color: #ffecd1;
  border-radius: 35px;
  img {
    height: 100%;
  }
  @media ${device.laptop} {
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    img {
      display: none;
    }
  }
  @media ${device.mobile} {
    height: 240px;
  }
`;

const ShoppingCart = styled.button`
  margin: 0 20px;
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: translateY(5px);
  }
  span {
    position: absolute;
    top: 5px;
    right: -3px;
    font-size: 14px;
    color: #fff;
    background-color: #fb9300;
    width: 21px;
    height: 21px;
    padding: 2px;
    border-radius: 100%;
  }
  img {
    width: 28px;
    height: 28px;
  }
`;

const CartUserInfo = styled.div`
  h4 {
    font-weight: 700;
    font-size: 20px;
  }
  span {
    font-weight: 500;
  }
`;

const CartUser = styled.div`
  display: flex;
  align-items: center;
  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: #d6f5ff;
    border-radius: 100%;
    padding: 12px;
    margin-right: 10px;
  }
`;

const HeaderTopRight = styled.div`
  display: flex;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const HeaderTopUser = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  @media ${device.tablet} {
    justify-content: center;
    margin: 0 auto;
    margin-top: 20px;
  }
`;

interface IHeader {
  onHandleVisibleCart: () => void;
}

export const Header: React.FC<IHeader> = observer(({ onHandleVisibleCart }) => {
  const { foodStore, categoriesStore, cartStore } = useRootStore();

  const onSearchFood = (name: string) => {
    foodStore.searchFood(name.toLowerCase());
    foodStore.getFood(categoriesStore.categoryId, foodStore.searchValue);
  };

  return (
    <HeaderWrapper>
      <Container>
        <HeaderTop>
          <Title>React Food &#128523;</Title>
          <HeaderTopRight>
            <SearchFood foodStore={foodStore} onSearchFood={onSearchFood} />
            <HeaderTopUser>
              <ShoppingCart
                data-testid={'btnOpenCart'}
                onClick={() => onHandleVisibleCart()}
              >
                <span>{cartStore.totalCount}</span>
                <img src={shoppingCartSvg} alt="shopping cart svg" />
              </ShoppingCart>
              <CartUser>
                <img src={userPng} alt="user png" />
                <CartUserInfo>
                  <h4>Jeremy</h4>
                  <span>User</span>
                </CartUserInfo>
              </CartUser>
            </HeaderTopUser>
          </HeaderTopRight>
        </HeaderTop>
        <HeaderBottom>
          <img src={deliveryPng} alt="delivery png" />
          <HeaderInfo>
            <h2>Hello Jeremy,</h2>
            <p>
              Get free delivery every <span>$20</span> purchase
            </p>
            <Button>Learn More</Button>
          </HeaderInfo>
        </HeaderBottom>
      </Container>
    </HeaderWrapper>
  );
});
