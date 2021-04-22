import { createContext } from 'react';
import { CategoriesStore } from './CategoryStore';
import { FoodStore } from './FoodStore';
import { CartStore } from './CartStore';

export const rootStoreContext = createContext({
  CategoriesStore: new CategoriesStore(),
  FoodStore: new FoodStore(),
  CartStore: new CartStore(),
});
