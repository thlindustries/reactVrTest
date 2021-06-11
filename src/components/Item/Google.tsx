import "@google/model-viewer";

import styles from './styles.module.scss';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export const Google = ({ src, ios }: any) => {
  // const modelViewer = document.getElementById('model-viewer-test') as any;

  return (
    <div className={styles.modelContainer}>
      <model-viewer
        src={src}
        ios-src={ios}
        camera-controls
        auto-rotate
        ar
        loading="eager"
        shadow-intensity={3}
        shadow-softness={0}
        camera-orbit="90deg 90deg 1.5m"
        ar-modes="webxr scene-viewer quick-look"
        id="model-viewer-test"
        exposure={1.5}
      >
        {/* <div className={styles.testButton}> */}
          <button 
            className={styles.testButton} 
            slot="hotspot-hand" 
            data-position="0.05 0.07 0.05" 
            data-normal="0.05 0.07 0.05"
            onClick={()=>alert('Parece que deu certo heim...')}
          >
            <div className={styles.annotation}>Hmm.... rs</div>
          </button>
        {/* </div> */}
      </model-viewer>
    </div>
  );
}