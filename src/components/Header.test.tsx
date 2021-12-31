import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CartStore } from 'store/CartStore';
import { CategoriesStore } from 'store/CategoryStore';
import { FoodStore } from 'store/FoodStore';
import { Header } from 'components/Header';
import { RootStateProvider } from 'store/RootState.Context';

const mockOnHandleVisibleCart = jest.fn();
let cartMockStore: CartStore;
let categoriesMockStore: CategoriesStore;
let foodMockStore: FoodStore;

beforeEach(() => {
  cartMockStore = new CartStore();
  categoriesMockStore = new CategoriesStore();
  foodMockStore = new FoodStore();

  cartMockStore.cart = [
    {
      id: 1,
      categoryId: 1,
      name: 'test',
      price: 12,
      image: 'test.png',
      totalCount: 1,
    },
  ];
  categoriesMockStore.categories = [
    { id: 1, name: 'test 1 category', image: 'test1.png' },
    { id: 2, name: 'test 2 category', image: 'test2.png' },
  ];
  foodMockStore.food = [
    {
      id: 1,
      categoryId: 1,
      name: 'test',
      price: 12,
      image: 'test.png',
      totalCount: 1,
    },
    {
      id: 2,
      categoryId: 2,
      name: 'test2',
      price: 99,
      image: 'test2.png',
      totalCount: 1,
    },
  ];
});

describe('render header', () => {
  it('should be render with props', () => {
    render(
      <RootStateProvider
        value={{
          cartStore: cartMockStore,
          foodStore: foodMockStore,
          categoriesStore: categoriesMockStore,
        }}
      >
        <Header onHandleVisibleCart={mockOnHandleVisibleCart} />
      </RootStateProvider>,
    );
    expect(screen.getByText(/React Food/)).toBeTruthy();
  });
});
