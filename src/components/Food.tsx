import { useObserver } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { FoodItem } from '.';
import { Container } from '../App';
import { FoodStoreType } from '../store/CategoryStore';
import { useRootStore } from '../store/RootState.Context';

const FoodWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 120px;
  margin-bottom: 60px;
  padding: 30px;
`;

const Food = () => {
  const { categoriesStore } = useRootStore();

  const onAddToCart = (obj: FoodStoreType) => {
    categoriesStore.addItemToCart(obj);
  };

  React.useEffect(() => {
    categoriesStore.getFood(categoriesStore.categoryId, categoriesStore.searchValue);
  }, [categoriesStore, categoriesStore.searchValue]);

  return useObserver(() => (
    <Container>
      <FoodWrapper>
        {categoriesStore.food.map((obj) => (
          <FoodItem key={obj.id} onAddToCart={onAddToCart} item={obj} />
        ))}
      </FoodWrapper>
    </Container>
  ));
};

export default Food;
