import { useEffect } from 'react';
import { isAndroid, isDesktop } from 'react-device-detect';

import { Item } from 'components/Item';

import styles from '../styles.module.scss';

export const BrugeSalgado = () => {
  // const [activeTexture, setActiveTexture] = useState(0);
  // const [isAnimationActive, setIsAnimationActive] = useState(false);

  // const handleChangeTexture = useCallback((modelRef: any) => {
  //   if (!modelRef.current) return;
  //   let materials = modelRef.current.model.materials;

  //   let applyPBRTexture = (channel: any, texturePath: string) => {
  //     for (let i = 0; i < materials.length - 1; i++) {
  //       materials[i].pbrMetallicRoughness[channel].texture.source.setURI(texturePath);
  //     }
  //   }

  //   if (activeTexture === 0) {
  //     setActiveTexture(1);
  //     applyPBRTexture('baseColorTexture', '/assets/bruggemanSal/vanish.png');
  //   } else {
  //     setActiveTexture(0);
  //     applyPBRTexture('baseColorTexture', '/assets/bruggemanSal/textSal.png');
  //   }
  // }, [activeTexture]);

  // const handlePlayAnimation = useCallback((animationName: string) => {
  // },[]);

  useEffect(() => {
    const hasTitle = document.getElementById("title");
    const newTitle = document.createElement("title");
    newTitle.setAttribute('id', 'title');
    newTitle.innerText = "Bruggeman Sal";

    // setIsAnimationActive(false);

    if (hasTitle) {
      hasTitle.parentNode?.removeChild(hasTitle);
    }
    document.head.appendChild(newTitle);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.itemContainer}>
          <Item
            src="/assets/bruggemanSal/V7_Brug_Azul.gltf"
            ios="/assets/bruggemanSal/V7_Brug_Azul.usdz"
            autoAR
            cardMsg="Bruge salgado"
          />
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <h1>BruggemanÂ®</h1>
            <span>Massa Tradicional - Azul</span>
            <p>Bruggeman massa tradicional Ă© um fermento biolĂłgico seco instantĂ˘neo de alta qualidade, indicado para todos os tipos de pĂŁes e massas panificĂˇveis, principalmente pĂŁes salgados e pizzas.</p>
          </div>
          <a
            href={`intent://arvr.google.com/scene-viewer/1.0?file=https://raw.githubusercontent.com/thlindustries/reactVrTest/master/public/assets/bruggemanSal/V7_Brug_Azul.${(isAndroid || isDesktop) ? 'gltf' : 'usdz'};action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;`}
          >
            Abrir AR
          </a>
        </div>
      </div>
    </div>
  );
}
