import { render, screen } from '@testing-library/react';
import { CartFood } from 'components/CartFood';

const mockOnRemoveCartItem = jest.fn();

describe('render cart food', () => {
  test('should be render', () => {
    render(
      <CartFood
        name={'test'}
        price={12}
        image={'test.png'}
        totalCount={1}
        onRemoveCartItem={mockOnRemoveCartItem}
      />,
    );
    expect(screen.getByText(/test/)).toBeTruthy();
  });
});
