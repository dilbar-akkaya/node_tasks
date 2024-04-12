import { repository } from '../repository/repository';

export const getUserCartService = (userId: string) => {
  return repository.getUserCart(userId);
};

export const updateUserCartService = (userId: string, data: { productId: string, count: number }) => {
  return repository.updateUserCart(userId, data);
};
export const deleteUserCart = (userId: string) => {
  return repository.deleteUserCart(userId);
};
/* 
export const getUserCart = (userId: string, arr: CartEntity[]) => {
  if (!userId) {
    throw new Error("Invalid user ID");
  }
  const userCart = arr.find(item => item.userId === userId);
  if (!userCart) {
    const newCart = {
      userId: userId,
      id: uuidv4(),
      items: [],
      total: 0
    };
    arr.push(newCart);
    console.log(arr)
    return newCart;
  }
  return userCart;
} */

/* export const updateUserCart = (userId: string, arrCarts: CartEntity[], data: { productId: string, count: number }, arrProducts: CartItemEntity[]) => {
  const userCart = getUserCart(userId, arrCarts);
  const existIndex = arrProducts.findIndex(item => item.product.id === data.productId);
  if (existIndex !== -1) {
    userCart.items[existIndex].count = data.count;
  } else {
    const productAllFields = products.find((item) => {
      return item.id === data.productId;
    });
    if (productAllFields) {
      console.log(productAllFields)
      const newProductInCart: CartItemEntity = {
        product: productAllFields,
        count: data.count,
      };
      userCart.items = [...userCart.items, newProductInCart];
    }
  }
}
export const deleteUserCart = (userId: string, arr: CartEntity[]) => {
  const userCart = getUserCart(userId, arr);
  if (userCart) {
    userCart.items = [];
    userCart.total = 0;
  }
  return true;
} */