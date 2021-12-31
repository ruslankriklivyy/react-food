import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { SearchFood } from 'components/SearchFood';
import { FoodStore } from 'store/FoodStore';
import { RootStateProvider } from 'store/RootState.Context';
import { Food } from 'components/Food';

const mockOnSearchFood = jest.fn();
let foodMockStore: FoodStore;

beforeEach(() => {
  foodMockStore = new FoodStore();
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

describe('render search food', () => {
  it('should be render search food with props and store', () => {
    render(
      <RootStateProvider>
        <SearchFood foodStore={foodMockStore} onSearchFood={mockOnSearchFood} />
      </RootStateProvider>,
    );
    screen.debug();
  });
});

describe('actions of search food', () => {
  // fetch data from API
  it('should be search food', async () => {
    render(
      <RootStateProvider>
        <SearchFood foodStore={foodMockStore} onSearchFood={mockOnSearchFood} />
      </RootStateProvider>,
    );
    render(
      <RootStateProvider>
        <Food />
      </RootStateProvider>,
    );

    fireEvent.change(screen.getByPlaceholderText(/Search by food name/), {
      target: { value: 'Hawaiian' },
    });

    await waitFor(() => screen.getByText(/Hawaiian Pizza/));
    expect(screen.getByText(/Hawaiian Pizza/)).toBeTruthy();
  });
});
