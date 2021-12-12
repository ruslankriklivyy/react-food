import { render, screen } from '@testing-library/react';

import { CartStore } from '../store/CartStore';
import { RootStateProvider } from '../store/RootState.Context';
import { Cart } from './Cart';

const mockOnCancelCart = jest.fn();
let cartMockStore: CartStore;

beforeEach(() => {
  cartMockStore = new CartStore();
});

describe('render cart', () => {
  test('should be render', () => {
    const onCancelCart = jest.fn();
    render(
      <RootStateProvider>
        <Cart onCancelCart={onCancelCart} />
      </RootStateProvider>,
    );
    expect(screen.getByText(/Order Menu/)).toBeTruthy();
  });
});

describe('actions of cart', () => {
  test('should be add item to cart', () => {
    const newItem = {
      id: 1,
      categoryId: 1,
      name: 'test',
      price: 12,
      image: 'test.png',
      totalCount: 1,
    };

    cartMockStore.addItemToCart(newItem);

    render(
      <RootStateProvider value={{ cartStore: cartMockStore }}>
        <Cart onCancelCart={mockOnCancelCart} />
      </RootStateProvider>,
    );
    expect(screen.getByText(/test/)).toBeTruthy();
  });

  test('should be remove item from cart', () => {
    cartMockStore.removeItemCart(1);
    render(
      <RootStateProvider value={{ cartStore: cartMockStore }}>
        <Cart onCancelCart={mockOnCancelCart} />
      </RootStateProvider>,
    );
    expect(screen.getByText(/Cart Empty/)).toBeTruthy();
  });
});
