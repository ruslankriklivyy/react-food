import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CartStore } from 'store/CartStore';
import { CategoriesStore } from 'store/CategoryStore';
import { FoodStore } from 'store/FoodStore';
import { RootStateProvider } from 'store/RootState.Context';
import { Home } from 'components/Home';

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
  ];
});

describe('render home', () => {
  it('should be render home with store', () => {
    render(
      <RootStateProvider
        value={{
          cartStore: cartMockStore,
          foodStore: foodMockStore,
          categoriesStore: categoriesMockStore,
        }}
      >
        <Home />
      </RootStateProvider>,
    );

    expect(screen.getByAltText(/food png/)).toBeTruthy();
  });
});

describe('actions of home', () => {
  it('should be open cart', () => {
    render(
      <RootStateProvider
        value={{
          cartStore: cartMockStore,
          foodStore: foodMockStore,
          categoriesStore: categoriesMockStore,
        }}
      >
        <Home />
      </RootStateProvider>,
    );

    fireEvent.click(screen.getByTestId(/btnOpenCart/));

    expect(screen.getByTestId(/homeRight/)).toHaveStyle('right: 0');
    expect(screen.getByTestId(/cartBlockOut/)).toHaveStyle(
      'visibility: visible; opacity: 1;',
    );
  });
});
