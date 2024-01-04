import React, { useEffect, useRef } from 'react';
import { useStore } from 'effector-react';

import { modelCart } from '../../models/cart';
import { modelPromo } from '../../models/promo';

import styles from './products-container.module.css';
import { Product } from './product';
import { Input } from '../../ui/input/input';
import { MainButton } from '../../ui/main-button/main-button';
import { PromoButton } from '../../ui/promo-button/promo-button';
import { Loader } from '../../ui/loader/loader';


export const ProductsContainer = () => {
  const products = useStore(modelCart.$products);
  const isProductsLoading = useStore(modelCart.$isProductsLoading);

  const promo = useStore(modelPromo.$promo);
  const isPromoLoading = useStore(modelPromo.$isPromoLoading);
  const isPromoFailed = useStore(modelPromo.$isPromoFailed);


  const inputRef = useRef(null);

  useEffect(() => {
    modelCart.loadProducts();
  }, []);

  const handleApplyPromo = () => {
    modelPromo.applyPromo(inputRef.current.value);
  };

  return (
    <div className={`${styles.container}`}>
      {
        isProductsLoading
          ? <Loader size='large' />
          : products.map((item, index) => <Product key={index} {...item} />)
      }
      <div className={styles.promo}>
        <div className={styles.inputWithBtn}>
          <Input
            type='text'
            placeholder='Введите промокод'
            extraClass={styles.input}
            inputWithBtn={true}
            inputRef={inputRef}
          />
          <MainButton
            type='button'
            extraClass={styles.promo_button}
            inputButton={true}
            onClick={handleApplyPromo}
          >
            {isPromoLoading ? <Loader size='small' inverse={true} /> : 'Применить'}
          </MainButton>
        </div>
        {promo && <PromoButton extraClass={styles.promocode}>{promo}</PromoButton>}
      </div>
      {promo && <p className={styles.text}>Промокод успешно применён!</p>}
      {isPromoFailed && <p className={styles.text}>Произошла ошибка! Проверьте корректность введенного промокода</p>}
    </div>
  );
};
