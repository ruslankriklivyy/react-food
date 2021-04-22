export type CategoriesStoreType = {
  id: number;
  name: string;
  image: string;
};

export type FoodStoreType = {
  id: number;
  name: string;
  image: string;
  price: number;
  categoryId: number;
  totalCount: number;
};
