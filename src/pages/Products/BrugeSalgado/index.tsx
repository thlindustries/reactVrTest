import { useEffect } from 'react';
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
            src="/assets/bruggemanSal/Bruggeman.gltf"
            ios="/Burggeman_Salgada.usdz"
            autoAR
            cardMsg="Bruge salgado"
          />
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
