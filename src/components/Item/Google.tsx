import styles from './styles.module.scss';
import "@google/model-viewer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> ;
    }
  }
}

export const Google = () => {
  return (
    <div className={styles.model}>
      <model-viewer 
        src="/Caixa.gltf" 
        camera-controls 
        auto-rotate 
        ar
        ios-src="/Caixa_ios.usdz"
        loading="eager"
        skybox-image="/ambiente.hdr"
      />
    </div>
  );
}