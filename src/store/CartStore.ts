import { FoodStoreType } from '../types/types';
import { action, observable, makeObservable } from 'mobx';

export class CartStore {
  @observable
  cart: FoodStoreType[] = [];
  totalPrice: number = 0;
  totalCount: number = 0;

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

    const isAlreadyHave = this.cart.some((i) => i.id === obj.id);

    if (this.cart.length > 0) {
      this.cart.forEach((item) => {
        if (item.id === obj.id) {
          item.totalCount++;
          item.price = item.price + obj.price;
          this.totalCount = this.cart.reduce((sum, obj) => sum + obj.totalCount, 0);
        }
      });
    }

    if (this.cart.length === 0 || !isAlreadyHave) {
      this.cart.push(newObj);
      this.totalCount = this.cart.reduce((sum, obj) => sum + obj.totalCount, 0);
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
    const totalCount = this.cart.reduce((sum, obj) => sum + obj.totalCount, 0);
    this.totalCount = totalCount;
  };
}
