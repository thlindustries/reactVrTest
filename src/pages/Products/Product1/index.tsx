import {useEffect, useMemo, useRef} from 'react';
import { Item } from 'components/Item';

import styles from '../styles.module.scss';

export const Product1 = () => {
  const vw = useMemo(()=>Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),[]);

  const wrapperRef = useRef<HTMLDivElement>(null);

  if(wrapperRef.current){
    
  }

  wrapperRef?.current?.addEventListener('resize',(e)=>{
    console.log(e.view?.innerWidth);
  });

  useEffect(()=>{
    console.log(vw);
  },[vw]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.card}>
        <div className={styles.itemContainer}>
          <Item src="/Caixa.gltf" ios="/Caixa.usdz" />
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <h1>Bruggeman®</h1>
            <span>Massa doce - Marrom</span>
            <p>Bruggeman massa doce é um fermento biológico seco instantâneo de alta qualidade, indicado para receitas que contenham acima de 3% de açucar, principalmente pães doces.</p>
          </div>
        </div>
      </div>

      <div className={styles.separator} />

      <div className={styles.card}>
        <div className={styles.itemContainer}>
          <Item src="/Burggeman_Salgada.gltf" ios="/Burggeman_Salgada.usdz" />
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <h1>Bruggeman®</h1>
            <span>Massa Tradicional - Azul</span>
            <p>Bruggeman massa tradicional é um fermento biológico seco instantâneo de alta qualidade, indicado para todos os tipos de pães e massas panificávies, principalmente pães salgados e pizzas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
