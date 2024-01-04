import { createStore } from 'effector';

export const $products = createStore([]);
export const $isProductsLoading = createStore(false);

export const $totalPrice = createStore(0);
