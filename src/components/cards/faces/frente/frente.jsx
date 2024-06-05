import 'animate.css';
import styles from './frente.module.css';

export default function Frente(props) {

  const toggleClass = () => {
    props.setFlip(!props.flipped);
  };

  const pedirDica = () => {
    const toggle = !props.toggle
    props.pedirDica(toggle)
  }

  const esconderDica = () => {
    props.pedirDica(false);
  }

  return (
    <div>
      <div className={styles.cards}>
        <div className={styles.numero}>
          <h1>
            {props.id}
          </h1>
        </div>
        {/* PERGUNTA */}
        <div className={styles.enunciado}>
          <h2>
            {props.quest}
          </h2>
        </div>
        {/* BOTAO REVELAR RESPOSTA */}
        <div className={styles.resposta}>
          <button className={styles.botoes + ' ' + styles.bot_revelar} title="Revelar a resposta da pergunta" onClick={function (event) { toggleClass(); props.setFlip(true) }}>
            Revelar resposta
          </button>
        </div>
        {/* BOTOES DEBAIXO*/}
        <div className={styles.div_botoes}>
          <button class={styles.botoes} title="Voltar para o flashcard anterior" onClick={ () => {
                  props.voltarNPergunta();
                  esconderDica();
                }}>
            <div className={styles.icones + ' ' + styles.seta_esq}>
            </div>
            Pergunta anterior
          </button>
          <button variant="primary" className={styles.botoes} title="Pedir uma dica" onClick={ pedirDica }>
            <div className={styles.icones + ' ' + styles.interrogacao}></div>
            Pedir dica
          </button>
          <button className={styles.botoes} title="Pular para o próximo flashcard" onClick={() => {
                  props.setNPergunta();
                  esconderDica();
                }}>
            Pular pergunta
            <div className={styles.icones + ' ' + styles.seta_dir}>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}