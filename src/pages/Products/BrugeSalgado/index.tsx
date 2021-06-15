import { useEffect } from 'react';
import { Item } from 'components/Item';

import styles from '../styles.module.scss';

export const BrugeSalgado = () => {
  useEffect(() => {
    const hasTitle = document.getElementById("title");
    const newTitle = document.createElement("title");
    newTitle.setAttribute('id', 'title');
    newTitle.innerText = "Bruggeman Sal";

    if (hasTitle) {
      hasTitle.parentNode?.removeChild(hasTitle);
    }
    document.head.appendChild(newTitle);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.itemContainer}>
          <Item src="/Burggeman_Salgada.gltf" ios="/Burggeman_Salgada.usdz" autoAR cardMsg="Bruge salgado"/>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <h1>Bruggeman®</h1>
            <span>Massa Tradicional - Azul</span>
            <p>Bruggeman massa tradicional é um fermento biológico seco instantâneo de alta qualidade, indicado para todos os tipos de pães e massas panificáveis, principalmente pães salgados e pizzas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
