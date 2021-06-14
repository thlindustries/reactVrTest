import {useEffect, useRef} from 'react';

import "@google/model-viewer";

import styles from './styles.module.scss';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export const Google = ({ src, ios, autoAR = false, cardMsg }: any) => {
  const modelViewerRef = useRef<any>(null);
  const openArButton = useRef<HTMLButtonElement>(null);

  useEffect(()=>{
    if(autoAR){
      setTimeout(()=>{
        openArButton.current?.click();
        console.log(autoAR);
      },750);
    }
  },[autoAR]);

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
        ar-modes="webxr"
        id="model-viewer-test"
        ar-status="session-started"
      >
        {/* <div className={styles.testButton}> */}
          <button 
            className={styles.testButton} 
            slot="hotspot-hand" 
            data-position="0.05 0.07 0.05" 
            data-normal="0.05 0.07 0.05"
            onClick={()=>alert('Parece que deu certo heim...')}
          >
            <div className={styles.annotation}>{cardMsg}</div>
          </button>
          <button ref={openArButton} className={styles.customArButton} slot="ar-button">
            👋 Abrir o modo AR
        </button>
        {/* </div> */}
      </model-viewer>
    </div>
  );
}