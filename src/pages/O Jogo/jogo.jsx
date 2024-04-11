import { useState } from 'react';

import Cards from '../../components/cards';

import { questoes } from '../../data/questoes';

import styles from './Jogo.module.css';

export default function Jogo(){

  const [getNPergunta, setNPergunta] = useState(0);
  const [questao, setQuestao] = useState(questoes); 
  const [cardAtual, setCardAtual] = useState();

  const cards = [];
  function getAllCards(){
    questoes.map((data) => (
      cards[data.id - 1] = <Cards id={ data.id } quest={ data.pergunta } answ={ data.resposta } dica={ cardAtual.dica } setNPergunta={ sumParaProxima } decParaAnterior={ decParaAnterior }/>
    ))
  }

  function sortearCard() {
    const sortear = Math.floor(Math.random() * questoes.length);
    setCardAtual(questao[sortear]);
    setNPergunta(sortear);
  }

  const sumParaProxima = (event) => {
    //event.preventDefault();
    setNPergunta(() => getNPergunta + 1);
    setCardAtual(questao[getNPergunta]);

    if(getNPergunta >= 9){
      setNPergunta(() => getNPergunta - 9);
      setCardAtual(questao[getNPergunta]);
    }
  }

  const decParaAnterior = (event) => {
    //event.preventDefault();
    setNPergunta(() => getNPergunta - 1);
    setCardAtual(questao[getNPergunta]);

    if(getNPergunta <= 0){
      setNPergunta(() => getNPergunta + 9);
      setCardAtual(questao[getNPergunta]);
    }
  }

  return(
    <>
      <button className={styles.botoes} type='button' onClick={sortearCard}>
      <div className={styles.icones + ' ' + styles.sortear}></div>
        Sortear Card
        </button>
      {cardAtual && (
        <div>
          <Cards id={ cardAtual.id } quest={ cardAtual.pergunta } resposta={ cardAtual.resposta } dica={ cardAtual.dica } setNPergunta={ sumParaProxima } decParaAnterior={ decParaAnterior }/>
        </div>
      )}
    </>
  )
}