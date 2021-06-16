import { useEffect } from 'react';
import { Item } from 'components/Item';

import styles from '../styles.module.scss';

export const BrugeDoce = () => {
  useEffect(() => {
    const hasTitle = document.getElementById("title");
    const newTitle = document.createElement("title");
    newTitle.setAttribute('id', 'title');
    newTitle.innerText = "Bruggeman Doce";

    if (hasTitle) {
      hasTitle.parentNode?.removeChild(hasTitle);
    }
    document.head.appendChild(newTitle);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.itemContainer}>
          <Item src="/Caixa.gltf" ios="/Caixa.usdz" autoAR cardMsg="Bruge doce" child="/Pao_Frances.gltf"/>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <h1>Bruggeman®</h1>
            <span>Massa doce - Marrom</span>
            <p>Bruggeman massa doce é um fermento biológico seco instantâneo de alta qualidade, indicado para receitas que contenham acima de 3% de açúcar, principalmente pães doces.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
