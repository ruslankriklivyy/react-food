import { render, screen, fireEvent } from '@testing-library/react';
import { RootStateProvider } from '../store/RootState.Context';

import { FoodItem } from './FoodItem';

const mockOnAddToCart = jest.fn();
const mockFoodItem = {
  id: 1,
  categoryId: 1,
  name: 'test',
  price: 12,
  image: 'test.png',
  totalCount: 1,
};

describe('render food item', () => {
  it('should be render with props', () => {
    render(
      <RootStateProvider>
        <FoodItem item={mockFoodItem} onAddToCart={mockOnAddToCart} />
      </RootStateProvider>,
    );
    expect(screen.getByText(/test/)).toBeTruthy();
  });
});
