import React from 'react';
import { useObserver } from 'mobx-react-lite';
import styled from 'styled-components';

import { FoodItem } from '.';
import { Container } from '../App';
import { FoodStoreType } from '../types/types';
import { useRootStore } from '../store/RootState.Context';

const FoodWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 40px;
  margin-bottom: 60px;
  padding: 30px;
`;

const Food = () => {
  const { cartStore, foodStore, categoriesStore } = useRootStore();

  const onAddToCart = (obj: FoodStoreType) => {
    cartStore.addItemToCart(obj);
  };

  React.useEffect(() => {
    foodStore.getFood(categoriesStore.categoryId, foodStore.searchValue);
  }, [foodStore, categoriesStore.categoryId, foodStore.searchValue]);

  return useObserver(() => (
    <Container>
      <FoodWrapper>
        {foodStore.food.map((obj) => (
          <FoodItem key={obj.id} onAddToCart={onAddToCart} item={obj} />
        ))}
      </FoodWrapper>
    </Container>
  ));
};

export default Food;
