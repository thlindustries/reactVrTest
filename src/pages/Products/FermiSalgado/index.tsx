import { useEffect } from 'react';
import { isAndroid, isDesktop } from 'react-device-detect';

import { Item } from 'components/Item';

import styles from '../styles.module.scss';

export const FermiSalgado = () => {
  useEffect(() => {
    const hasTitle = document.getElementById("title");
    const newTitle = document.createElement("title");
    newTitle.setAttribute('id', 'title');
    newTitle.innerText = "Fermipan Salgado";

    if (hasTitle) {
      hasTitle.parentNode?.removeChild(hasTitle);
    }
    document.head.appendChild(newTitle);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.itemContainer}>
          <Item src="/assets/Fermipan/V7_Fermi_Vermelho.gltf" ios="/assets/Fermipan/V7_Fermi_Vermelho.usdz" autoAR cardMsg="Fermi salgado" />
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <h1>Fermipan® Massa Sal 500g (Vermelho)</h1>
            <span>Fermento Biológico</span>
            <p>Fermento biológico seco instantâneo especialmente desenvolvido para todos os tipos de pães e massas panificáveis, sendo mais indicado para pães salgados e pizzas.</p>
          </div>
          <a
            href={`intent://arvr.google.com/scene-viewer/1.0?file=https://raw.githubusercontent.com/thlindustries/reactVrTest/master/public/assets/Fermipan/V7_Fermi_Vermelho.${(isAndroid || isDesktop) ? 'gltf' : 'usdz'}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;`}
          >
            Abrir AR
          </a>
        </div>
      </div>
    </div>
  );
}
