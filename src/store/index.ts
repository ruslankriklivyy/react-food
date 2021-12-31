import { createContext } from 'react';
import { CategoriesStore } from 'store/CategoryStore';
import { FoodStore } from 'store/FoodStore';
import { CartStore } from 'store/CartStore';

export const rootStoreContext = createContext({
  CategoriesStore: new CategoriesStore(),
  FoodStore: new FoodStore(),
  CartStore: new CartStore(),
});
