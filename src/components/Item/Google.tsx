import "@google/model-viewer";

import styles from './styles.module.scss';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> ;
    }
  }
}

export const Google = ({src,ios}: any) => {
  // const modelViewer = document.getElementById('model-viewer-test') as any;

  return (
    <div className={styles.modelContainer}>
      <model-viewer 
        src={src} 
        camera-controls 
        auto-rotate 
        ar
        ios-src={ios}
        loading="eager"
        shadow-intensity="1"
        camera-orbit="90deg 90deg 1.5m" 
        ar-modes="webxr scene-viewer quick-look"
        id="model-viewer-test"
      />
    </div>
  );
}