import { useEffect, useRef, useCallback } from 'react';

import "@google/model-viewer";

import styles from './styles.module.scss';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export const Google = ({ 
  src, 
  ios, 
  autoAR = false, 
  cardMsg, 
  child,
  autoplay,
  animationName,
  toggleAnimation,
  changeTexture,
}: any) => {
  const modelViewerRef = useRef<any>(null);
  const openArButton = useRef<HTMLButtonElement>(null);

  const swapTextures = useCallback(()=>{
    changeTexture && modelViewerRef && changeTexture(modelViewerRef);
  },[changeTexture]);

  useEffect(() => {
    if (autoAR) {
      setTimeout(() => {
        openArButton.current?.click();
        console.log(autoAR);
      }, 750);
    }
  }, [autoAR]);

  return (
    <div className={styles.modelContainer}>
      <model-viewer
        src={src}
        ios-src={ios}
        ref={modelViewerRef}
        camera-controls
        ar
        camera-orbit="90deg 90deg 1.5m"
      >
        <button
          className={styles.testButton}
          slot="hotspot-hand"
          data-position="0.05 0.10 0.05"
          data-normal="0.05 0.07 0.05"
          onClick={() => swapTextures()}
        >
          <div className={styles.annotation}>{cardMsg}</div>
        </button>
      </model-viewer>
    </div>
  );
}