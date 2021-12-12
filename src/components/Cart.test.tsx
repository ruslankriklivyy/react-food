import { render, screen, fireEvent } from '@testing-library/react';

import { CartStore } from '../store/CartStore';
import { RootStateProvider } from '../store/RootState.Context';
import { Cart } from './Cart';

const mockOnCancelCart = jest.fn();
let cartMockStore: CartStore;

beforeEach(() => {
  cartMockStore = new CartStore();
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
  // test('should be add item to cart', () => {
  //   const newItem = {
  //     id: 2,
  //     categoryId: 2,
  //     name: 'test 2',
  //     price: 10,
  //     image: 'test2.png',
  //     totalCount: 1,
  //   };

  //   cartMockStore.addItemToCart(newItem);

  //   render(
  //     <RootStateProvider value={{ cartStore: cartMockStore }}>
  //       <Cart onCancelCart={mockOnCancelCart} />
  //     </RootStateProvider>,
  //   );
  //   expect(screen.getByText(/test 2/)).toBeTruthy();
  // });

  test('should be remove item from cart', () => {
    render(
      <RootStateProvider value={{ cartStore: cartMockStore }}>
        <Cart onCancelCart={mockOnCancelCart} />
      </RootStateProvider>,
    );

    fireEvent.click(screen.getByTestId('btnRemoveCartItem'));

    expect(screen.getByText(/Cart Empty/)).toBeTruthy();
  });
});
