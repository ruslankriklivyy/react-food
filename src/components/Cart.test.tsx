import { render, screen } from '@testing-library/react';

import { RootStateProvider } from '../store/RootState.Context';
import { Cart } from './Cart';

describe('render cart', () => {
  test('render with props', () => {
    const onCancelCart = jest.fn();
    render(
      <RootStateProvider>
        <Cart onCancelCart={onCancelCart} />
      </RootStateProvider>,
    );
    expect(screen.getByText('Order Menu')).toBeTruthy();
  });
});
