import React from 'react';
import styled from 'styled-components';
import { useObserver } from 'mobx-react-lite';

import { useRootStore } from '../store/RootState.Context';
import { FoodStoreType } from '../types/types';

import cartEmptyPng from '../assets/img/cart-empty.png';
import leftArrowSvg from '../assets/img/left-arrow.svg';
import { Title } from './Title';
import { Button } from './Button';
import { CartFood } from './CartFood';

const CartWrapper = styled.div`
  background-color: #fff;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 100%;
  height: 100%;
  padding: 30px;
`;

const CartPrice = styled.div`
  margin-top: 30px;
  font-weight: 600;
  font-size: 30px;
  span {
    color: #fb9300;
  }
`;

const CartBottom = styled.div`
  padding-top: 50px;
  button {
    margin-top: 60px;
    width: 100%;
    font-size: 26px;
    padding: 18px 27px;
    border-radius: 40px;
    margin-bottom: 30px;
  }
`;

const CartEmpty = styled.div`
  margin: 60px 0;
  img {
    display: block;
    width: 90%;
    height: 90%;
    margin: 0 auto;
    object-fit: contain;
  }
  span {
    margin-top: 20px;
    display: block;
    font-weight: 600;
    font-size: 25px;
    text-align: center;
  }
`;

const CartCancel = styled.button`
  position: absolute;
  top: 20px;
  right: 40px;
  opacity: 0.7;
  background-color: transparent;
  border: none;
  width: 40px !important;
  height: 40px !important;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  img {
    width: 35px;
    height: 35px;
    transform: rotate(-180deg);
  }
`;

interface ICart {
  onCancelCart: () => void;
}

export const Cart: React.FC<ICart> = React.memo(({ onCancelCart }) => {
  const { cartStore } = useRootStore();

  const onRemoveCartItem = (id: number) => {
    cartStore.removeItemCart(id);
  };

  const sendDelivery = (arr: FoodStoreType[]) => {
    const newArr = arr.slice();
    console.log(newArr);
  };

  return useObserver(() => (
    <CartWrapper>
      <CartCancel onClick={() => onCancelCart()}>
        <img src={leftArrowSvg} alt="left arrow svg" />
      </CartCancel>
      <CartBottom>
        <Title>Order Menu</Title>
        {cartStore.cart.length > 0 ? (
          cartStore.cart.map((obj) => (
            <CartFood key={obj.id} onRemoveCartItem={() => onRemoveCartItem(obj.id)} {...obj} />
          ))
        ) : (
          <CartEmpty>
            <img src={cartEmptyPng} alt="cart empty" />
            <span>Cart Empty</span>
          </CartEmpty>
        )}
        <CartPrice>
          Total Price: <span>$</span> {cartStore.totalPrice.toFixed(2)}
        </CartPrice>
        <Button onClick={() => sendDelivery(cartStore.cart)}>Checkout</Button>
      </CartBottom>
    </CartWrapper>
  ));
});
