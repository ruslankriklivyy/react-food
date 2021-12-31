import { CartStore } from 'store/CartStore';

let mockCartStore: CartStore;

beforeEach(() => {
  mockCartStore = new CartStore();
});

describe('cart store', () => {
  it('should be add item to cart', () => {
    const newItem = {
      id: 1,
      categoryId: 1,
      name: 'test',
      price: 12,
      image: 'test.png',
      totalCount: 1,
    };
    mockCartStore.addItemToCart(newItem);

    expect(mockCartStore.cart.length).toBe(1);
    expect(mockCartStore.totalCount).toBe(1);
    expect(mockCartStore.totalPrice).toBe(12);
  });

  it('should be remove item from cart', () => {
    mockCartStore.cart = [
      {
        id: 1,
        categoryId: 1,
        name: 'test',
        price: 12,
        image: 'test.png',
        totalCount: 1,
      },
    ];
    mockCartStore.removeItemCart(1);

    expect(mockCartStore.cart.length).toBe(0);
    expect(mockCartStore.totalCount).toBe(0);
    expect(mockCartStore.totalPrice).toBe(0);
  });
});
