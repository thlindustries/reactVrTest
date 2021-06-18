// import { useEffect, useRef, useCallback } from 'react';
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
}: any) => {
  // const modelViewerRef = useRef<any>(null);
  // const openArButton = useRef<HTMLButtonElement>(null);

  // useEffect(() => {
  //   if (autoAR) {
  //     setTimeout(() => {
  //       openArButton.current?.click();
  //       console.log(autoAR);
  //     }, 750);
  //   }
  // }, [autoAR]);

  return (
    <div className={styles.modelContainer}>
      <model-viewer
        src={src}
        ios-src={ios}
        camera-controls
        ar
        camera-orbit="90deg 90deg 1.5m"
      >
        <button
          className={styles.testButton}
          slot="hotspot-hand"
          data-position="0.05 0.10 0.05"
          data-normal="0.05 0.07 0.05"
          onClick={() => alert('oi')}
        >
          <div className={styles.annotation}>teste</div>
        </button>
      </model-viewer>
    </div>
  );
}