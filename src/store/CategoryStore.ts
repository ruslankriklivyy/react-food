import { action, observable, makeObservable } from 'mobx';
import { fetchCategories, fetchFood } from '../api/api';

type CategoriesStoreType = {
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

export class CategoriesStore {
  @observable
  categories: CategoriesStoreType[] = [];
  food: FoodStoreType[] = [];
  categoryId: number = 0;
  cart: FoodStoreType[] = [];
  totalPrice: number = 0;
  totalCount: number = 1;
  searchValue: string = '';

  constructor() {
    makeObservable(this, {
      categoryId: observable,
      categories: observable,
      food: observable,
      cart: observable,
      totalPrice: observable,
      searchValue: observable,
      totalCount: observable,
      selectedCategory: action,
      getCategories: action,
      getFood: action,
      addItemToCart: action,
      removeItemCart: action,
      searchFood: action,
    });
  }

  @action
  getCategories = () => {
    fetchCategories().then((categories) => (this.categories = categories));
  };

  @action
  getFood = (id: number, name: string) => {
    fetchFood(id, name).then((food) => (this.food = food));
  };

  @action
  searchFood = (name: string) => {
    this.searchValue = name;
  };

  @action
  selectedCategory = (id: number) => {
    this.categoryId = id;
  };

  @action
  addItemToCart = (obj: FoodStoreType) => {
    const newObj = {
      id: obj.id,
      categoryId: obj.categoryId,
      name: obj.name,
      price: obj.price,
      image: obj.image,
      totalCount: 1,
    };

    const totalPrice = this.cart.reduce((sum, obj) => {
      return sum + obj.price;
    }, obj.price);
    this.totalPrice = totalPrice;

    const ids: any = [];

    if (this.cart.length > 0) {
      this.cart.forEach((item) => {
        if (item.id === obj.id) {
          ids.push(obj.id);
          console.log(ids);
          item.totalCount++;
          item.price = item.price + obj.price;
        }
      });
    }

    if (this.cart.length === 0 || ids[ids.length - 1] !== obj.id) {
      this.cart.push(newObj);
    }
  };
  @action
  removeItemCart = (id: number) => {
    const newCart = this.cart.filter((food) => food.id !== id);
    this.cart = newCart;
    const totalPrice = this.cart.reduce((sum, obj) => {
      return sum + Number(obj.price);
    }, 0);
    this.totalPrice = totalPrice;
  };
}
