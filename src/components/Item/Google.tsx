import styles from './styles.module.scss';
import "@google/model-viewer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}

export const Google = () => {
  return (
    <div className={styles.model}>
      <model-viewer src="/Caixa.gltf" camera-controls auto-rotate ar></model-viewer>
    </div>
  );
}