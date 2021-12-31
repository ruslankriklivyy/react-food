import { FoodStoreType } from 'types/types';
import { action, observable, makeObservable, computed } from 'mobx';

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
      getTotalPrice: computed,
      getTotalCount: computed,
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

    const isAlreadyHave = this.cart.some((i) => i.id === obj.id);

    if (this.cart.length > 0) {
      this.cart.forEach((item) => {
        if (item.id === obj.id) {
          item.totalCount++;
          item.price = item.price + obj.price;
          this.totalCount = this.getTotalCount;
          this.totalPrice = this.getTotalPrice;
        }
      });
    }

    if (this.cart.length === 0 || !isAlreadyHave) {
      this.cart.push(newObj);
      this.totalCount = this.getTotalCount;
      this.totalPrice = this.getTotalPrice;
    }
  };

  @action
  removeItemCart = (id: number) => {
    this.cart = this.cart.filter((food) => food.id !== id);
    this.totalPrice = this.getTotalPrice;
    this.totalCount = this.getTotalCount;
  };

  @computed
  get getTotalPrice() {
    return this.cart.reduce((sum, obj) => sum + Number(obj.price), 0);
  }

  @computed
  get getTotalCount() {
    return this.cart.reduce((sum, obj) => sum + obj.totalCount, 0);
  }
}
