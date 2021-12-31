import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CategoriesStore } from 'store/CategoryStore';
import { FoodStore } from 'store/FoodStore';
import { RootStateProvider } from 'store/RootState.Context';
import { Categories } from 'components/Categories';

let categoriesMockStore: CategoriesStore;
let foodStoreMockStore: FoodStore;

beforeEach(() => {
  categoriesMockStore = new CategoriesStore();
  foodStoreMockStore = new FoodStore();

  categoriesMockStore.categories = [
    { id: 1, name: 'test 1 category', image: 'test1.png' },
    { id: 2, name: 'test 2 category', image: 'test2.png' },
  ];
});

describe('render categories', () => {
  it('should be render', () => {
    render(
      <RootStateProvider value={{ categoriesStore: categoriesMockStore }}>
        <Categories />
      </RootStateProvider>,
    );
    expect(screen.getByText(/Menu Category/)).toBeTruthy();
  });
});

describe('actions of categories', () => {
  it('should be select category id', async () => {
    render(
      <RootStateProvider
        value={{
          categoriesStore: categoriesMockStore,
          foodStore: foodStoreMockStore,
        }}
      >
        <Categories />
      </RootStateProvider>,
    );

    fireEvent.click(screen.getByTestId('1'));

    await waitFor(() => screen.getByTestId('active'));

    expect(screen.getByTestId('active')).toHaveStyle(
      'background-color: #fb9300',
    );
  });
});
