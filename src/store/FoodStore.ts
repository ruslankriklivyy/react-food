import { FoodStoreType } from 'types/types';
import { action, observable, makeObservable } from 'mobx';
import { fetchFood } from 'api/api';

export class FoodStore {
  @observable
  food: FoodStoreType[] = [];
  searchValue: string = '';

  constructor() {
    makeObservable(this, {
      food: observable,
      searchValue: observable,
      getFood: action,
      searchFood: action,
    });
  }

  @action
  getFood = (id: number, name: string) => {
    fetchFood(id, name).then((food) => (this.food = food));
  };

  @action
  searchFood = (name: string) => {
    this.searchValue = name;
  };
}
