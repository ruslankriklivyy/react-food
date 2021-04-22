import { CategoriesStoreType, FoodStoreType } from './../types/types';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://60815ddc73292b0017cdd642.mockapi.io/api/',
});

export const fetchCategories = (): Promise<CategoriesStoreType[]> => {
  return instance.get('categories').then(({ data }) => data);
};

export const fetchFood = (id: number, name: string): Promise<FoodStoreType[]> => {
  return instance.get(`food${id !== null ? `?categoryId=${id}` : ''}`).then(({ data }) => {
    const newData = data.filter(
      (item: FoodStoreType) => item.name.toLowerCase().indexOf(name.toLowerCase()) >= 0,
    );
    if (name.length > 0) {
      return newData;
    } else {
      return data;
    }
  });
};
