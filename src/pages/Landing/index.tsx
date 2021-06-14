import { useCallback } from 'react';

import styles from './styles.module.scss';

export const Landing = () => {

  const openProduct = useCallback((product: string) => {
    switch (product) {
      case 'p1':
        // push('/bruggerman-doce');
        window.location.href = '/bruggerman-doce';
        break;
      case 'p2':
        // push('/bruggerman-salgado');
        window.location.href = '/bruggerman-salgado';
        break;
      case 'p3':
        // push('/saf-instant-doce');
        window.location.href = '/saf-instant-doce';
        break;
      case 'p4':
        // push('/saf-instant-salgado');
        window.location.href = '/saf-instant-salgado';
        break;
      case 'p5':
        // push('/fermipan-doce');
        window.location.href = '/fermipan-doce';
        break;
      case 'p6':
        // push('/fermipan-salgado');
        window.location.href = '/fermipan-salgado';
        break;
      default:
        break;
    }
  }, []);

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
