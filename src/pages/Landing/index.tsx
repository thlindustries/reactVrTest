import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './styles.module.scss';

export const Landing = () => {
  const { push } = useHistory();

  const openProduct = useCallback((product: string) => {
    switch (product) {
      case 'p1':
        push('/bruggerman-doce');
        break;
      case 'p2':
        push('/bruggerman-salgado');
        break;
      case 'p3':
        push('/saf-instant-doce');
        break;
      case 'p4':
        push('/saf-instant-salgado');
        break;
      case 'p5':
        push('/fermipan-doce');
        break;
      case 'p6':
        push('/fermipan-salgado');
        break;
      default:
        break;
    }
  }, [push]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonsContainer}>
        <button type="button" onClick={() => openProduct('p1')}>Bruggerman Doce</button>
        <button type="button" onClick={() => openProduct('p2')}>Bruggerman Salgado</button>
        <button type="button" onClick={() => openProduct('p3')}>Saf-instant Doce</button>
        <button type="button" onClick={() => openProduct('p4')}>Saf-instant Salgado</button>
        <button type="button" onClick={() => openProduct('p5')}>Fermipan Doce</button>
        <button type="button" onClick={() => openProduct('p6')}>Fermipan Salgado</button>
      </div>
    </div>
  );
}
