import { createStore } from 'effector';

export const $promo = createStore(null);
export const $discount = createStore(null);

export const $isPromoLoading = createStore(false);
export const $isPromoFailed = createStore(false);

