export type CategoriesStoreType = {
  id: number;
  name: string;
  image: string;
};

export type IFoodStore = {
  food: Array<FoodStoreType>;
  searchValue: '' | string;
};

export type FoodStoreType = {
  id: number;
  name: string;
  image: string;
  price: number;
  categoryId: number;
  totalCount: number;
};
