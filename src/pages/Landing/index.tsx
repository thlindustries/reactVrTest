import {useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import styles from './styles.module.scss';

export const Landing = () => {
  const {push} = useHistory();

  const openProduct = useCallback((product: string)=>{
    switch(product){
      case 'p1':
        push('/product1');
        break;
      case 'p2':
        push('/product2');
        break;
      case 'p3':
        push('/product3');
        break;
      default: 
        break;
    }
  },[push]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonsContainer}>
        <button type="button" onClick={()=>openProduct('p1')}>Produto 1</button>
        <button type="button" onClick={()=>openProduct('p2')}>Produto 2</button>
        <button type="button" onClick={()=>openProduct('p3')}>Produto 3</button>
      </div>
    </div>
  );
}
