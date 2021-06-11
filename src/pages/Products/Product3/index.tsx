import { Item } from 'components/Item';

import styles from '../styles.module.scss';

export const Product3 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.itemContainer}>
          <Item src="/Caixa.gltf" ios="/Caixa.usdz" />
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <h1>Fermipan® Massa Sal 500g (Vermelho)</h1>
            <span>Fermento Biológico</span>
            <p>Fermento biológico seco instantâneo especialmente desenvolvido para todos os tipos de pães e massas panificáveis, sendo mais indicado para pães salgados e pizzas</p>
          </div>
        </div>
      </div>

      <div className={styles.separator} />

      <div className={styles.card}>
        <div className={styles.itemContainer}>
          <Item src="/Caixa.gltf" ios="/Caixa.usdz" />
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <h1>Fermipan® Massa Sal 500g (Vermelho)</h1>
            <span>Fermento Biológico</span>
            <p>Fermento biológico seco instantâneo especialmente desenvolvido para todos os tipos de pães e massas panificáveis, sendo mais indicado para pães salgados e pizzas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
