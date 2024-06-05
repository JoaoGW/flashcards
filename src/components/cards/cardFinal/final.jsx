import { Link } from "react-router-dom";

import styles from './final.module.css';

export default function Fim(){
  return(
    <div>
      <div className={styles.cards}>
        <div className={styles.enunciado}>
            <div className={styles.icones + ' ' + styles.trofeu}> </div>
            <h1> 🎉🎉 Parabéns! 🎉🎉</h1>
            <h1>Você concluiu o jogo!</h1>
        </div>
        <Link to={ '../principal' }>
          <button className={styles.botoes}>
              <h3>Retornar para o menu principal</h3>
          </button>
        </Link>
      </div>
    </div>
  )
}