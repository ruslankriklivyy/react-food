import React from 'react';
import { CategoriesStore } from './CategoryStore';

type RootStateContextValue = {
  categoriesStore: CategoriesStore;
};

const RootStateContext = React.createContext<RootStateContextValue>({} as RootStateContextValue);

const categoriesStore = new CategoriesStore();

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <RootStateContext.Provider value={{ categoriesStore }}>{children}</RootStateContext.Provider>
);

export const useRootStore = () => React.useContext(RootStateContext);
