import { $isProductsLoading, $products, $totalPrice } from './store';
import { loadProducts, increaseCount, decreaseCount, deleteProduct } from './events';

export const modelCart = {
  $products,
  $isProductsLoading,
  $totalPrice,
  loadProducts,
  increaseCount,
  decreaseCount,
  deleteProduct
};
