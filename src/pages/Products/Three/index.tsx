import { useEffect, Suspense, useRef } from 'react';
import { ARCanvas, DefaultXRControllers } from '@react-three/xr';

import { OrbitControls, Stage } from '@react-three/drei';

import Caixa from './model';

import styles from '../styles.module.scss';

export const Three = () => {
  const ref = useRef<any>();

  useEffect(() => {
    const hasTitle = document.getElementById("title");
    const newTitle = document.createElement("title");
    newTitle.setAttribute('id', 'title');
    newTitle.innerText = "Fermipan Salgado";

    if (hasTitle) {
      hasTitle.parentNode?.removeChild(hasTitle);
    }
    document.head.appendChild(newTitle);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.itemContainer}>
          <ARCanvas shadows dpr={[1, 2]} camera={{ fov: 100 }}>
            <DefaultXRControllers />
            <OrbitControls ref={ref} autoRotate />
            <Suspense fallback={null}>
              <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
                <Caixa />
              </Stage>
            </Suspense>
          </ARCanvas>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <h1>Fermipan® Massa Sal 500g (Vermelho)</h1>
            <span>Fermento Biológico</span>
            <p>Fermento biológico seco instantâneo especialmente desenvolvido para todos os tipos de pães e massas panificáveis, sendo mais indicado para pães salgados e pizzas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
