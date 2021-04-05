import { createContext } from 'react';
import { CategoriesStore } from './CategoryStore';

export const rootStoreContext = createContext({
  CategoriesStore: new CategoriesStore(),
});
