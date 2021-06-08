// import { Suspense, useRef,useState } from 'react';
import { useEffect, useState } from 'react';

// import { OrbitControls, Stage } from '@react-three/drei';
// import { ARCanvas, DefaultXRControllers } from '@react-three/xr';

// import Caixa from './Three';
import {Google} from './Google';

import styles from './styles.module.scss';

export const Item = () => {
  const [visibleOption, setVisibleOption] = useState('google');

  // const ref = useRef<any>();

  // const toggleVisibleOption = () => {
  //   if (visibleOption === 'three') {
  //     setVisibleOption('google');
  //   } else {
  //     setVisibleOption('three');
  //   }
  // }

  useEffect(()=>{
    setVisibleOption("google");
  },[]);

  return (
    <div className={styles.wrapper}>
      <h1>{`Lib utilizada: ${visibleOption}`}</h1>
      {/* <button type="button" onClick={toggleVisibleOption}>Mudar 3D Lib</button> */}
      {/* {visibleOption === 'three' ? (
        <ARCanvas shadows dpr={[1, 2]} camera={{ fov: 100 }}>
          <DefaultXRControllers />
          <OrbitControls ref={ref} autoRotate />
          <Suspense fallback={null}>
            <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
              <Caixa />
            </Stage>
          </Suspense>
        </ARCanvas>
      ) : (
        <Google />
      )} */}
      <Google />
    </div>
  );
}
