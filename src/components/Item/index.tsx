import { Suspense, useRef } from 'react';
// import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { ARCanvas } from '@react-three/xr';

import Caixa from './Caixa';
import styles from './styles.module.scss';

export const Item = () => {
  const ref = useRef<any>();

  return (
    <div className={styles.model}>
      <p>Teste</p>
      <ARCanvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Suspense fallback={null}>
          <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
            <Caixa />
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate />
      </ARCanvas>
    </div>
  );
}
