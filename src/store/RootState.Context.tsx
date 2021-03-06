import React from 'react';
import { CategoriesStore } from 'store/CategoryStore';
import { FoodStore } from 'store/FoodStore';
import { CartStore } from 'store/CartStore';

type RootStateContextValue = {
  categoriesStore: CategoriesStore;
  foodStore: FoodStore;
  cartStore: CartStore;
};

export const RootStateContext = React.createContext<RootStateContextValue>(
  {} as RootStateContextValue,
);

const categoriesStore = new CategoriesStore();
const foodStore = new FoodStore();
const cartStore = new CartStore();

export const RootStateProvider: React.FC<React.PropsWithChildren<{}> | any> = ({
  children,
  value,
}) => (
  <RootStateContext.Provider
    value={value ?? { categoriesStore, foodStore, cartStore }}
  >
    {children}
  </RootStateContext.Provider>
);

export const useRootStore = () => React.useContext(RootStateContext);
