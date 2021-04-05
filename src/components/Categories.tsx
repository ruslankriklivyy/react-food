import { useObserver } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { Title } from '.';
import { Container } from '../App';

import { useRootStore } from '../store/RootState.Context';

const CategoriesWrapper = styled.div`
  margin-top: 60px;
  padding: 30px;
`;

const CategoriesTop = styled.div`
  margin-bottom: 30px;
`;

const CategoriesTypes = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CategoriesItem = styled.div`
  width: 130px;
  height: 180px;
  margin-right: 35px;
  ${(props: ICategories) =>
    props.active ? 'background-color: #fb9300' : 'background-color: #fff'};
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.1s ease;
  &:active {
    transform: translateY(5px);
  }
  &:hover {
    opacity: 0.8;
  }
  h4 {
    text-align: center;
    font-size: 22px;
    margin-bottom: 28px;
    ${(props) => (props.active ? 'color: #fff' : 'color: #000')}
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    ${(props: ICategories) =>
      props.active ? 'background-color: #fff' : 'background-color: #fb9300'};
    border-radius: 100%;
    margin: 0 auto;
    padding: 10px;
    svg {
      transform: rotate(-90deg);
      fill: ${(props) => (props.active ? '#fb9300' : '#fff')};
      width: 13px;
      height: 13px;
    }
  }
`;

const CategoriesImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px auto 10px auto;
  width: 55px;
  height: 55px;
  background-color: #fff;
  border-radius: 100%;
  img {
    width: 27px;
    height: 27px;
  }
`;

interface ICategories {
  active: boolean;
}

const Categories = () => {
  const { categoriesStore } = useRootStore();

  const onSelectId = (id: number) => {
    categoriesStore.getFood(id, categoriesStore.searchValue);
    categoriesStore.selectedCategory(id);
    console.log(categoriesStore);
  };

  React.useEffect(() => {
    categoriesStore.getCategories();
  }, [categoriesStore]);

  return useObserver(() => (
    <CategoriesWrapper>
      <Container>
        <CategoriesTop>
          <Title>Menu Category</Title>
        </CategoriesTop>
        <CategoriesTypes>
          {categoriesStore.categories.map(({ name, image, id }) => (
            <CategoriesItem
              key={id}
              active={id === categoriesStore.categoryId}
              onClick={() => onSelectId(id)}>
              <CategoriesImage>
                <img src={image} alt="pizza svg" />
              </CategoriesImage>
              <h4>{name}</h4>
              <button>
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="451.847px"
                  height="451.847px"
                  viewBox="0 0 451.847 451.847"
                  xmlSpace="preserve">
                  <g>
                    <path
                      d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                    />
                  </g>
                </svg>
              </button>
            </CategoriesItem>
          ))}
        </CategoriesTypes>
      </Container>
    </CategoriesWrapper>
  ));
};

export default Categories;
