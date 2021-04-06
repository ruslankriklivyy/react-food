import axios from 'axios';
import { FoodStoreType } from '../store/CategoryStore';

// const instance = axios.create({
//   baseURL: 'http://localhost:3001/',
// });

export const fetchCategories = (): Promise<any> => {
  return axios.get('categories').then(({ data }) => data);
};

export const fetchFood = (id: number, name: string): Promise<any> => {
  return axios.get(`food${id !== null ? `?categoryId=${id}` : ''}`).then(({ data }) => {
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
