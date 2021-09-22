import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { Container } from '../App';
import { FoodStoreType } from '../types/types';
import { useRootStore } from '../store/RootState.Context';
import { device } from '../utils/deviceMedia';
import { FoodItem } from './FoodItem';

const FoodWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 40px;
  margin-bottom: 60px;
  padding: 30px;
  @media ${device.mobile} {
    justify-content: center;
    margin-bottom: 0;
  }
`;

export const Food = observer(() => {
  const { cartStore, foodStore, categoriesStore } = useRootStore();

  const onAddToCart = (obj: FoodStoreType) => {
    cartStore.addItemToCart(obj);
  };

  React.useEffect(() => {
    foodStore.getFood(categoriesStore.categoryId, foodStore.searchValue);
  }, [foodStore, categoriesStore.categoryId, foodStore.searchValue]);

  return (
    <Container>
      <FoodWrapper>
        {foodStore.food.map((obj) => (
          <FoodItem key={obj.id} onAddToCart={onAddToCart} item={obj} />
        ))}
      </FoodWrapper>
    </Container>
  );
});
