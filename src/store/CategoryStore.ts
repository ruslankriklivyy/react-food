import { CategoriesStoreType } from 'types/types';
import { action, observable, makeObservable } from 'mobx';
import { fetchCategories } from 'api/api';

export class CategoriesStore {
  @observable
  categories: CategoriesStoreType[] = [];
  categoryId: number = 0;

  constructor() {
    makeObservable(this, {
      categoryId: observable,
      categories: observable,
      selectedCategory: action,
      getCategories: action,
    });
  }

  @action
  getCategories = () => {
    fetchCategories().then((categories) => (this.categories = categories));
  };

  @action
  selectedCategory = (id: number) => {
    this.categoryId = id;
  };
}
