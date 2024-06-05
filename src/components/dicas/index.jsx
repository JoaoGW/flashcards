import { useState } from 'react';

import styles from './dicas.module.css';

export default function Dicas(props){
  const [nDica, setnDica] = useState(1);
  const [dicaAtual, setDicaAtual] = useState(props.dica1);

  const proxDica = () => {
    if (nDica < 3) {
      setnDica((c) => c + 1);
      if (nDica === 1) {
        setDicaAtual(props.dica2);
      } else if (nDica === 2) {
        setDicaAtual(props.dica3);
      }
    }
  };

  return (
    <div className={styles.dica}>
      <div>
        <div>
          <h2>DICA {nDica}:</h2>
        </div>
        <div>{dicaAtual}</div>
        <div>
          <button className={styles.pedirDica} onClick={() => proxDica()}>
            Pedir mais uma dica
          </button>
        </div>
      </div>
    </div>
  );
}