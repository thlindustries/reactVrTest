import { useCallback } from 'react';

import styles from './styles.module.scss';

export const Landing = () => {

  const openProduct = useCallback((product: string) => {
    switch (product) {
      case 'p1':
        // push('/bruggerman-doce');
        window.location.href = '/bruggeman-doce';
        break;
      case 'p2':
        // push('/bruggerman-salgado');
        window.location.href = '/bruggeman-sal';
        break;
      case 'p3':
        // push('/saf-instant-doce');
        window.location.href = '/saf-instant-doce';
        break;
      case 'p4':
        // push('/saf-instant-salgado');
        window.location.href = '/saf-instant-sal';
        break;
      case 'p5':
        // push('/fermipan-doce');
        window.location.href = '/fermipan-doce';
        break;
      case 'p6':
        // push('/fermipan-salgado');
        window.location.href = '/fermipan-sal';
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonsContainer}>
        <button type="button" onClick={() => openProduct('p1')}>Bruggeman Doce</button>
        <button type="button" onClick={() => openProduct('p2')}>Bruggeman Sal</button>
        <button type="button" onClick={() => openProduct('p3')}>Saf-instant Doce</button>
        <button type="button" onClick={() => openProduct('p4')}>Saf-instant Sal</button>
        <button type="button" onClick={() => openProduct('p5')}>Fermipan Doce</button>
        <button type="button" onClick={() => openProduct('p6')}>Fermipan Sal</button>
      </div>
    </div>
  );
}
