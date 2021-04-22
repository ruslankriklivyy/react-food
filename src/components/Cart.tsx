import React from 'react';
import styled from 'styled-components';
import { useObserver } from 'mobx-react-lite';

import { Button, CartFood, Title } from '.';
import { useRootStore } from '../store/RootState.Context';

import userPng from '../assets/img/user.png';
import cartEmptyPng from '../assets/img/cart-empty.png';
import { FoodStoreType } from '../types/types';

const CartUser = styled.div`
  display: flex;
  margin-left: auto;
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

const CartUserInfo = styled.div`
  h4 {
    font-weight: 700;
    font-size: 20px;
  }
  span {
    font-weight: 500;
  }
`;

const CartTop = styled.div`
  display: flex;
`;

const CartWrapper = styled.div`
  background-color: #fff;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 100%;
  height: 100%;
  padding: 30px;
  button {
    margin-top: 60px;
    width: 100%;
    font-size: 26px;
    padding: 18px 27px;
    border-radius: 40px;
  }
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

const Cart = () => {
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
      <CartTop>
        <CartUser>
          <img src={userPng} alt="user png" />
          <CartUserInfo>
            <h4>Jeremy</h4>
            <span>User</span>
          </CartUserInfo>
        </CartUser>
      </CartTop>
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
};

export default Cart;
