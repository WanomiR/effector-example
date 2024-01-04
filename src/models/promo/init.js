import { forward } from 'effector';

import { $promo, $discount, $isPromoLoading, $isPromoFailed } from './store';
import { applyPromo, removePromo } from './events';
import { fetchPromoFx } from './fx';


$promo
  .on(fetchPromoFx.done, (_, { params, result }) => result.success ? params : null)
  .reset(removePromo);

$discount
  .on(fetchPromoFx.doneData, (_, { success, discount }) => success ? discount : null)
  .reset(removePromo);

$isPromoLoading
  .on(fetchPromoFx.pending, (_, isPending) => isPending)
  .reset(removePromo);

$isPromoFailed
  .on(fetchPromoFx.doneData, (_, result) => !result.success )
  .on(fetchPromoFx.fail, () => true)
  .reset(removePromo);


forward({
  from: applyPromo,
  to: fetchPromoFx
});
