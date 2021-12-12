import { FoodStore } from './FoodStore';

let mockFoodStore: FoodStore;

beforeEach(() => {
  mockFoodStore = new FoodStore();
});

describe('food store', () => {
  it('should be change search food', () => {
    mockFoodStore.searchFood('test');
    expect(mockFoodStore.searchValue).toBe('test');
  });
});
