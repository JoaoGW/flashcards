import { useState } from 'react';

import styles from './dicas.module.css';

export default function Dicas(props){
  
  const[totalDicas, setTotalDicas] = useState(1);

  return (
    <div className={ styles.dica }>
      <div>
        <div><h2>DICA {totalDicas}:</h2></div>
        <div>
          <div className={styles.luzes}>
            {totalDicas === 1 ?
              <div className={styles.luz}></div> : ''}
            {totalDicas === 2 ?
              <div>
                <div className={styles.luz}></div>
                <div className={styles.luz}></div>
              </div>
              : ''}
            {totalDicas === 3 ?
              <div>
                <div className={styles.luz}></div>
                <div className={styles.luz}></div>
                <div className={styles.luz}></div>
              </div>
              : ''}
          </div>
        </div>
        <div>
          {props.dica}
        </div>
        <div>
          <button className={ styles.pedirDica } onClick={() => setTotalDicas + 1}>Pedir mais uma dica</button>
        </div>
      </div>
    </div>
  );
}