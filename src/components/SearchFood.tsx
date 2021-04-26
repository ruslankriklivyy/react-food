import React from 'react';
import styled from 'styled-components';

import searchSvg from '../assets/img/search.svg';
import { IFoodStore } from '../types/types';

const HeaderSearch = styled.div`
  position: relative;
  width: 350px;
  height: 55px;
  margin-right: 40px;
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

interface ISearchFood {
  foodStore: IFoodStore;
  onSearchFood: (text: string) => void;
}

const SearchFood: React.FC<ISearchFood> = React.memo(function SearchFood({
  foodStore,
  onSearchFood,
}) {
  return (
    <HeaderSearch>
      <input
        type="text"
        placeholder="Search by food name"
        value={foodStore.searchValue}
        onChange={(e) => onSearchFood(e.target.value)}
      />
      <img src={searchSvg} alt="search svg" />
    </HeaderSearch>
  );
});

export default SearchFood;
