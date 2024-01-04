import React, { useMemo } from 'react';
import { useStore } from 'effector-react';

import { modelCart } from '../../models/cart';
import { modelPromo } from '../../models/promo';

import { AmountButton } from '../../ui/amount-button/amount-button';
import { DeleteButton } from '../../ui/delete-button/delete-button';
import styles from './product.module.css';

export const Product = ({ src, id, text, qty, price }) => {
  const discount = useStore(modelPromo.$discount);

  const discountedPrice = useMemo(() =>
      ((price - price * (discount / 100)) * qty).toFixed(0),
    [discount, price, qty]
  );

  const increase = () => {
    modelCart.increaseCount(id);
  };

  const decrease = () => {
    modelCart.decreaseCount(id);
  };

  const onDelete = () => {
    modelCart.deleteProduct(id);
  };

  return (
    <div className={`${styles.product}`}>
      <img className={styles.img} src={src} alt='фото товара.' />
      <p className={styles.text}>{text}</p>
      <div className={styles.amountbox}>
        <AmountButton onClick={decrease}>-</AmountButton>
        <p className={styles.amount}>{qty}</p>
        <AmountButton onClick={increase}>+</AmountButton>
      </div>
      <div className={styles.price}>
        <p className={`${styles.price} ${discount && styles.exPrice}`}>{price * qty} руб.</p>
        {discount && <p className={styles.price}>{discountedPrice} руб.</p>}
      </div>
      <DeleteButton onDelete={onDelete} />
    </div>
  );
};
