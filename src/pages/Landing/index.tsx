import { useCallback } from 'react';

import styles from './styles.module.scss';

export const Landing = () => {

  const openProduct = useCallback((product: string) => {
    switch (product) {
      case 'p1':
        window.location.href = '/bruggeman-doce';
        break;
      case 'p2':
        window.location.href = '/bruggeman-sal';
        break;
      case 'p3':
        window.location.href = '/saf-instant-doce';
        break;
      case 'p4':
        window.location.href = '/saf-instant-sal';
        break;
      case 'p5':
        window.location.href = '/fermipan-doce';
        break;
      case 'p6':
        window.location.href = '/fermipan-sal';
        break;
      case 'p7':
        window.location.href = '/three';
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
        <button type="button" onClick={() => openProduct('p7')}>Teste com threeJs</button>
        <a href="intent://arvr.google.com/scene-viewer/1.0?file=https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;">Avocado</a>
      </div>
    </div>
  );
}
