import styles from './styles.module.scss';
import { Model } from './Caixa';

export const Item = () => {
  return (
    <div className={styles.model}>
      <p>Teste</p>
      <Model />
    </div>
  );
}
