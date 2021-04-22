import { FoodStoreType } from '../types/types';
import { action, observable, makeObservable } from 'mobx';

export class CartStore {
  @observable
  cart: FoodStoreType[] = [];
  totalPrice: number = 0;
  totalCount: number = 1;

  constructor() {
    makeObservable(this, {
      cart: observable,
      totalPrice: observable,
      totalCount: observable,
      addItemToCart: action,
      removeItemCart: action,
    });
  }

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
