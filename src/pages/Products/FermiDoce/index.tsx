import { useEffect } from 'react';
import { Item } from 'components/Item';

import styles from '../styles.module.scss';

export const FermiDoce = () => {
  useEffect(() => {
    const hasTitle = document.getElementById("title");
    const newTitle = document.createElement("title");
    newTitle.setAttribute('id', 'title');
    newTitle.innerText = "Fermipan Doce";

    if (hasTitle) {
      hasTitle.parentNode?.removeChild(hasTitle);
    }
    document.head.appendChild(newTitle);
  }, []);
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.itemContainer}>
          <Item src="/assets/Fermipan/V7_Fermi_Cobre.gltf" ios="/assets/Fermipan/V7_Fermi_Cobre.usdz" autoAR cardMsg="Fermi doce"/>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <h1>Fermipan® Massa Doce 500g (Marrom)</h1>
            <span>Fermento Biológico</span>
            <p>Fermento biológico seco instantâneo especialmente desenvolvido para todos os tipos de pães e massas panificáveis, sendo mais indicado para massas doces (a partir de 3% de açúcar sobre a quantidade total de farinha).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
