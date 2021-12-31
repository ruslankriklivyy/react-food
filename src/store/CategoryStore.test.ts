import { CategoriesStore } from 'store/CategoryStore';

let mockCategoriesStore: CategoriesStore;

beforeEach(() => {
  mockCategoriesStore = new CategoriesStore();
  mockCategoriesStore.categories = [
    { id: 1, name: 'test 1 category', image: 'test1.png' },
    { id: 2, name: 'test 2 category', image: 'test2.png' },
  ];
});

describe('categories store', () => {
  it('should be select category id', () => {
    mockCategoriesStore.selectedCategory(2);
    expect(mockCategoriesStore.categoryId).toBe(2);
  });
});
