import React from 'react';
import styled from 'styled-components';

import { Button, Title } from '.';
import { Container } from '../App';

import searchSvg from '../assets/img/search.svg';
import deliveryPng from '../assets/img/delivery.png';
import { useObserver } from 'mobx-react-lite';
import { useRootStore } from '../store/RootState.Context';

const HeaderWrapper = styled.div`
  padding: 30px;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
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
`;

const HeaderSearch = styled.div`
  position: relative;
  width: 350px;
  height: 55px;
  input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 30px;
    outline: none;
    padding: 5px 20px;
    font-weight: 500;
    font-size: 16px;
    &::placeholder {
      font-weight: 500;
      font-size: 16px;
    }
  }
  img {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(0, -50%);
    width: 20px;
    height: 20px;
    opacity: 0.7;
  }
`;

const Header = () => {
  const { categoriesStore } = useRootStore();

  const onSearchFood = (name: string) => {
    categoriesStore.searchFood(name.toLowerCase());
    categoriesStore.getFood(categoriesStore.categoryId, categoriesStore.searchValue);
  };

  return useObserver(() => (
    <HeaderWrapper>
      <Container>
        <HeaderTop>
          <Title>React Food &#128523;</Title>
          <HeaderSearch>
            <input
              type="text"
              placeholder="Search by food name"
              value={categoriesStore.searchValue}
              onChange={(e) => onSearchFood(e.target.value)}
            />
            <img src={searchSvg} alt="search svg" />
          </HeaderSearch>
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
  ));
};

export default Header;
