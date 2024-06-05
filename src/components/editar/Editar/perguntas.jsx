import styles from './perguntas.module.css';

export default function Pergunta(props){
  return(
    <div>
      <button className={ styles.perguntas } onClick={ props.selecionar }>
        <div className={ styles.numero }> { props.numPergunta } </div>
        <div className={ styles.enunciado }> { props.pergunta } </div>            
      </button>
    </div>
  )
}