import { $promo, $discount, $isPromoLoading, $isPromoFailed } from './store';
import { applyPromo, removePromo } from './events';

export const modelPromo = {
  $promo,
  $discount,
  $isPromoLoading,
  $isPromoFailed,
  applyPromo,
  removePromo
};
