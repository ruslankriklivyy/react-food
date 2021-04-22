import React from 'react';
import styled from 'styled-components';

import { useObserver } from 'mobx-react-lite';
import { FoodStoreType } from '../types/types';

import plusSvg from '../assets/img/plus.svg';
import fireSvg from '../assets/img/fire.svg';

const FoodItemWrapper = styled.div`
  position: relative;
  width: 270px;
  height: 180px;
  margin-right: 15px;
  background-color: #fff;
  border-radius: 30px;
  padding: 0 20px;
  color: #2a2b3c;
  h4 {
    font-weight: 700;
    padding-top: 90px;
    font-size: 22px;
    margin-bottom: 10px;
  }
  span {
    font-size: 14px;
    color: #fb9300;
    font-weight: 700;
    b {
      font-size: 20px;
      color: #000;
      margin-left: 5px;
    }
  }
  button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #fb9300;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.1s ease;
    &:active {
      transform: translateY(5px);
      opacity: 0.6;
    }
    &:hover {
      opacity: 0.8;
    }
    img {
      width: 18px;
      height: 18px;
    }
  }
`;

const FoodItemImage = styled.div`
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translate(-50%, 0);
  img {
    width: 160px;
    height: 160px;
    object-fit: contain;
  }
`;

const FoodItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -70px;
  right: 0;
  width: 35px;
  height: 35px;
  background-color: #fedfd7;
  border-radius: 100%;
  img {
    width: 23px;
    height: 23px;
  }
`;

interface IFoodItem {
  item: FoodStoreType;
  onAddToCart: any;
}

const FoodItem: React.FC<IFoodItem> = ({ item, onAddToCart }) => {
  const { name, image, price } = item;

  return useObserver(() => (
    <FoodItemWrapper>
      <FoodItemIcon>
        <img src={fireSvg} alt="fire svg" />
      </FoodItemIcon>
      <FoodItemImage>
        <img src={image} alt="food png" />
      </FoodItemImage>
      <h4>{name}</h4>
      <span>
        $<b>{price}</b>
      </span>
      <button onClick={() => onAddToCart(item)}>
        <img src={plusSvg} alt="plus svg" />
      </button>
    </FoodItemWrapper>
  ));
};

export default FoodItem;
