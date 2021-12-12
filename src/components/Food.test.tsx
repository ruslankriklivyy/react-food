import { render, screen, fireEvent } from '@testing-library/react';

import { CartStore } from '../store/CartStore';
import { CategoriesStore } from '../store/CategoryStore';
import { FoodStore } from '../store/FoodStore';
import { RootStateProvider } from '../store/RootState.Context';
import { Cart } from './Cart';
import { Food } from './Food';

const mockOnCancelCart = jest.fn();
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

describe('render food', () => {
  it('should be render with store', () => {
    render(
      <RootStateProvider
        value={{
          cartStore: cartMockStore,
          foodStore: foodMockStore,
          categoriesStore: categoriesMockStore,
        }}
      >
        <Food />
      </RootStateProvider>,
    );
    expect(screen.getByText(/test/)).toBeTruthy();
  });
});

describe('actions of food', () => {
  it('should be add item food to empty cart', () => {
    cartMockStore.cart = [];
    render(
      <RootStateProvider
        value={{
          cartStore: cartMockStore,
          foodStore: foodMockStore,
          categoriesStore: categoriesMockStore,
        }}
      >
        <Food />
      </RootStateProvider>,
    );
    render(
      <RootStateProvider value={{ cartStore: cartMockStore }}>
        <Cart onCancelCart={mockOnCancelCart} />
      </RootStateProvider>,
    );

    fireEvent.click(screen.getByTestId('btnAddToCart'));
    expect(screen.getByText('12')).toBeTruthy();
  });

  it('should be add item food to cart', () => {
    render(
      <RootStateProvider
        value={{
          cartStore: cartMockStore,
          foodStore: foodMockStore,
          categoriesStore: categoriesMockStore,
        }}
      >
        <Food />
      </RootStateProvider>,
    );
    render(
      <RootStateProvider value={{ cartStore: cartMockStore }}>
        <Cart onCancelCart={mockOnCancelCart} />
      </RootStateProvider>,
    );

    fireEvent.click(screen.getByTestId('btnAddToCart'));
    expect(screen.getByText('24.00')).toBeTruthy();
  });
});
