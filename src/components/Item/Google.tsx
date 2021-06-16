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
        auto-rotate
        ar
        loading="eager"
        shadow-intensity={3}
        shadow-softness={0}
        exposure={1.1}
        camera-orbit="90deg 90deg 1.5m"
        ar-modes="webxr scene-viewer quick-look"
        id="model-viewer-test"
        ar-status="session-started"
        animation-name={animationName}
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
        <button
          className={styles.testButton}
          data-position="0.05 0.09 -0.04"
          data-normal="0.05 0.07 0.05"
          slot="hotspot-center"
          onClick={() => toggleAnimation()}
        >
          <div className={styles.annotation}>Ativar animação</div>
        </button>
        <button ref={openArButton} className={styles.customArButton} slot="ar-button">
          👋 Abrir o modo AR
        </button>
      </model-viewer>
    </div>
  );
}