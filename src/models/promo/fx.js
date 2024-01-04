import { createEffect } from 'effector';
import { applyPromoCodeRequest } from '../../services/fakeApi';

export const fetchPromoFx = createEffect(applyPromoCodeRequest);
