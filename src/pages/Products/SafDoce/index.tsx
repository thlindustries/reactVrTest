import { useEffect } from 'react';
import { isAndroid, isDesktop } from 'react-device-detect';

import { Item } from 'components/Item';

import styles from '../styles.module.scss';

export const SafDoce = () => {
  useEffect(() => {
    const hasTitle = document.getElementById("title");
    const newTitle = document.createElement("title");
    newTitle.setAttribute('id', 'title');
    newTitle.innerText = "Self-Instant Doce";

    if (hasTitle) {
      hasTitle.parentNode?.removeChild(hasTitle);
    }
    document.head.appendChild(newTitle);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.itemContainer}>
          <Item src="/assets/Saf/V7_Saf_Doce.gltf" ios="/assets/Saf/V7_Saf_Doce.usdz" autoAR cardMsg="Saf doce" />
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <h1>SAF-INSTANT® Massa Doce 500g</h1>
            <p>Fermento biológico seco instantâneo especialmente desenvolvido para todos os tipos de pães e massas panificáveis, sendo mais indicado para massas doces (a partir de 3% de açúcar sobre a quantidade total de farinha).</p>
          </div>
          <a
            href={`intent://arvr.google.com/scene-viewer/1.0?file=https://raw.githubusercontent.com/thlindustries/reactVrTest/master/public/assets/Saf/V7_Saf_Doce.${(isAndroid || isDesktop) ? 'gltf' : 'usdz'}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;`}
          >
            Abrir AR
          </a>
        </div>
      </div>
    </div>
  );
}
