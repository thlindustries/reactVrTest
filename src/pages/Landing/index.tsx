import {useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import styles from './styles.module.scss';

export const Landing = () => {
  const {push} = useHistory();

  const openProduct = useCallback((product: string)=>{
    switch(product){
      case 'p1':
        push('/bruggerman');
        break;
      case 'p2':
        push('/saf-instant');
        break;
      case 'p3':
        push('/fermipan');
        break;
      default: 
        break;
    }
  },[push]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonsContainer}>
        <button type="button" onClick={()=>openProduct('p1')}>Bruggerman</button>
        <button type="button" onClick={()=>openProduct('p2')}>Saf-instant</button>
        <button type="button" onClick={()=>openProduct('p3')}>Fermipan</button>
      </div>
    </div>
  );
}
