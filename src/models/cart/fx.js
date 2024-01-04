import { createEffect } from 'effector';
import { getItemsRequest } from '../../services/fakeApi';

export const fetchProductsFx = createEffect(getItemsRequest);
