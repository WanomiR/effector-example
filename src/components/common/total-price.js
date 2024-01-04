import React from 'react';
import { useStore } from 'effector-react';

import { modelCart } from '../../models/cart';
import { modelPromo } from '../../models/promo';

import styles from './total-price.module.css';


export const TotalPrice = ({ extraClass }) => {
  const totalPrice = useStore(modelCart.$totalPrice);
  const discount = useStore(modelPromo.$discount);

  return (
    <div className={`${styles.container} ${extraClass}`}>
      <p className={styles.text}>Итого:</p>
      <p>
        {
          discount
            ? `${(totalPrice - totalPrice * (discount / 100)).toFixed(0)} руб.`
            : totalPrice
        }
      </p>
    </div>
  );
};
