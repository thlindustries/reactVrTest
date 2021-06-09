import styles from './styles.module.scss';
import "@google/model-viewer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> ;
    }
  }
}

export const Google = ({src,ios}: any) => {
  return (
    <div className={styles.modelContainer}>
      <model-viewer 
        src={src} 
        camera-controls 
        auto-rotate 
        ar
        ios-src={ios}
        loading="eager"
        skybox-image="c1.hdr"
      />
      <model-viewer 
        src={src} 
        camera-controls 
        auto-rotate 
        ar
        ios-src={ios}
        loading="eager"
        skybox-image="c2.hdr"
      />
    </div>
  );
}