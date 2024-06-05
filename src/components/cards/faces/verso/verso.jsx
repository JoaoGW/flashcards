import styles from './verso.module.css';

import 'animate.css';

export default function Verso(props) {

  const toggleClass = () => {
    props.setFlip(!props.flipped);
  };

  return (
    <div className={styles.cards_verso}>
      <div className={styles.numero}>
        <h1>
          {props.id}
        </h1>
      </div>
      <h1>Resposta</h1>
      {/* RESPOSTA */}
      <h2> {props.resposta} </h2>
      {/* BOTOES DEBAIXO*/}
      <h3>Voce acertou a resposta?</h3>
      <div className={styles.div_botoes}>
        <button onClick={ function(event){{props.voltarPraPrimeira(); toggleClass(); props.setFlip(false);}}} className={styles.botoes} title="Errei a resposta">
          <div className={styles.icones + ' ' + styles.errei}>
          </div>
          Errei
        </button>
        <button onClick={ function(event){{props.addAcerto(); toggleClass(); props.setFlip(false);}}} className={styles.botoes} title="Acertei a resposta">
          <div className={styles.icones + ' ' + styles.acertei}></div>
          Acertei
        </button>
      </div>
      <div className={styles.voltarVerso}>
        <button href="" className={styles.botoes} title="Voltar para a pergunta" onClick={function (event) { toggleClass(); props.setFlip(false) }} >
          <div className={styles.icones + ' ' + styles.seta_esq}></div>
          Voltar para a pergunta
        </button>
      </div>
    </div>
  )
}