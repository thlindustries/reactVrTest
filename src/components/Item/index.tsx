import { Google } from './Google';

import styles from './styles.module.scss';

export const Item = ({ src, ios }: any) => {
  return (
    <div className={styles.wrapper}>
      <Google src={src} ios={ios} />
    </div>
  );
}
