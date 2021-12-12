import React from 'react';
import styled from 'styled-components';
import { Observer } from 'mobx-react-lite';

import cancelSvg from '../assets/img/cancel.svg';

const CartFoodItem = styled.div`
  position: relative;
  margin-top: 30px;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  font-size: 20px;
  h4 {
  }
  p {
    font-weight: 600;
    span {
      font-weight: 700;
      color: #fb9300;
      font-size: 16px;
    }
  }
`;

const CartFoodImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin-right: 20px;
  background-color: #ffecd1;
  border-radius: 20px;
  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
`;

const CartFoodInfo = styled.div``;

const CartFoodPrice = styled.div`
  font-size: 22px;
  font-weight: 700;
  position: absolute;
  bottom: 10px;
  right: 0;
  span {
    font-size: 15px;
    color: #fb9300;
    margin-right: 3px;
  }
`;

const CartFoodClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  transition: all 0.1s ease;
  &:active {
    transform: translateY(5px);
  }
  img {
    width: 13px;
    height: 13px;
    opacity: 0.7;
  }
`;

interface ICartFood {
  name: string;
  price: number;
  image: string;
  totalCount: number;
  onRemoveCartItem: () => void;
}

export const CartFood: React.FC<ICartFood> = ({
  name,
  price,
  image,
  totalCount,
  onRemoveCartItem,
}) => {
  return (
    <Observer>
      {() => (
        <CartFoodItem>
          <CartFoodImg>
            <img src={image} alt="pizza png" />
          </CartFoodImg>
          <CartFoodInfo>
            <h4>{name}</h4>
            <p>
              <span>x</span> {totalCount}
            </p>
            <CartFoodPrice>
              <span>$</span>
              {price.toFixed(2)}
            </CartFoodPrice>
            <CartFoodClose onClick={onRemoveCartItem}>
              <img src={cancelSvg} alt="cancel svg" />
            </CartFoodClose>
          </CartFoodInfo>
        </CartFoodItem>
      )}
    </Observer>
  );
};
