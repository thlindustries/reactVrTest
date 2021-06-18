// import { Google } from './Google';
import { Google } from './Test';

import styles from './styles.module.scss';

export const Item = ({
  src,
  ios,
  autoAR = false,
  cardMsg = "",
  child,
  autoplay,
  animationName,
  changeTexture,
  toggleAnimation,
}: any) => {
  return (
    <div className={styles.wrapper}>
      <Google 
        src={src} 
        ios={ios} 
        autoAR={autoAR} 
        cardMsg={cardMsg} 
        child={child} 
        autoplay={autoplay}
        animationName={animationName}
        toggleAnimation={toggleAnimation}
        changeTexture={changeTexture}
      />
    </div>
  );
}
