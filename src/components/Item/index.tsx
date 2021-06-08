import styles from './styles.module.scss';
import { Teste } from './teste';

export const Item = () => {
  return (
    <div className={styles.model}>
      <p>Teste</p>
      <Teste />
    </div>
  );
}
