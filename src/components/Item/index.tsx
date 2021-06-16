import { Google } from './Google';

import styles from './styles.module.scss';

export const Item = ({ src, ios, autoAR=false, cardMsg="", child }: any) => {
  return (
    <div className={styles.wrapper}>
      <Google src={src} ios={ios} autoAR={autoAR} cardMsg={cardMsg} child={child} />
    </div>
  );
}
