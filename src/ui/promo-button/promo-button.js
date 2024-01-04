import React from 'react';

import { modelPromo } from '../../models/promo';

import styles from './promo-button.module.css';
import closeIcon from '../../images/close.svg';

export const PromoButton = ({ children, extraClass }) => {
  const cancelPromo = () => {
    modelPromo.removePromo()
  };

  return (
    <button type="button" className={`${styles.button} ${extraClass}`} onClick={cancelPromo}>
      {children}
      <img className={styles.close} src={closeIcon} alt="кнопка закрытия" />
    </button>
  );
};
