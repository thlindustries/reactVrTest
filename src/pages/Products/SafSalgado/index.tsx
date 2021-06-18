import { useEffect } from 'react';
import { isAndroid, isDesktop } from 'react-device-detect';

import { Item } from 'components/Item';

import styles from '../styles.module.scss';

export const SafSalgado = () => {
  useEffect(() => {
    const hasTitle = document.getElementById("title");
    const newTitle = document.createElement("title");
    newTitle.setAttribute('id', 'title');
    newTitle.innerText = "Self-Instant Salgado";

    if (hasTitle) {
      hasTitle.parentNode?.removeChild(hasTitle);
    }
    document.head.appendChild(newTitle);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.itemContainer}>
          <Item src="/assets/Saf/V7_Saf_Salgada.gltf" ios="/assets/Saf/V7_Saf_Salgada.usdz" autoAR cardMsg="Fermi salgado" />
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <h1>SAF-INSTANT® Massa Sal 500g</h1>
            <p>Fermento biológico seco instantâneo especialmente desenvolvido para todos os tipos de pães e massas panificáveis, sendo mais indicado para pães salgados e pizzas.</p>
          </div>
          <a
            href={`intent://arvr.google.com/scene-viewer/1.0?file=https://raw.githubusercontent.com/thlindustries/reactVrTest/master/public/assets/Saf/V7_Saf_Salgada.${(isAndroid || isDesktop) ? 'gltf' : 'usdz'}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;`}
          >
            Abrir AR
          </a>
        </div>
      </div>
    </div>
  );
}
