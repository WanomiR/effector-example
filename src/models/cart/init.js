import { forward } from 'effector';

import { $isProductsLoading, $products, $totalPrice } from './store';
import { decreaseCount, deleteProduct, increaseCount, loadProducts } from './events';
import { fetchProductsFx } from './fx';


$products
  .on(fetchProductsFx.doneData, (_, response) => response.data)
  .on(increaseCount, (products, id) =>
    products
      .map((product) => product.id === id ? { ...product, qty: product.qty + 1 } : product))
  .on(decreaseCount, (products, id) =>
    products
      .filter((product) => product.id === id ? product.qty > 1 : true)
      .map((product) => product.id === id ? { ...product, qty: product.qty - 1 } : product))
  .on(deleteProduct, (products, id) =>
    products.filter((product) => product.id !== id));

$totalPrice
  .on($products, (_, products) =>
    products.length > 0
      ? products
        .map(({ price, qty }) => price * qty)
        .reduce((accumulator, price) => accumulator + price)
      : 0
  );

$isProductsLoading
  .on(fetchProductsFx.pending, (_, isPending) => isPending);


forward({
  from: loadProducts,
  to: fetchProductsFx
});
