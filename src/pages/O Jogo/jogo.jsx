import { useState } from 'react';
import { Link } from "react-router-dom";

import Cards from '../../components/cards';
import Fim from '../../components/cards/cardFinal/final';

import Pen from '../../assets/icons/pen.png';

import { questoes } from '../../data/questoes';

import styles from './Jogo.module.css';

export default function Jogo(){

  const [getNPergunta, setNPergunta] = useState(0);
  const [questao, setQuestao] = useState(questoes); 
  const [cardAtual, setCardAtual] = useState(0);
  const [getAcertos, setAcertos] = useState(0);
  const [hideDica, setHideDica] = useState(false);

  const cards = [];
  function getAllCards(){
    questoes.map((data) => (
      cards[data.id - 1] = <Cards id={ data.id } quest={ data.pergunta } answ={ data.resposta } dica1={ cardAtual.dica1 } dica2={ cardAtual.dica2 } dica3={ cardAtual.dica3 } setNPergunta={ sumParaProxima } decParaAnterior={ decParaAnterior } adicionarAcerto={ acertosSum } voltarPraPrimeira={ voltaPrimeira } hideDicas={hideDica}/>
    ))
  }

  // Sorteia um card aleatorio diferente do atual
  function sortearCard() {
    var cardValido;
    let sortear;
    
    do{
      // verifica se o cartao eh repetido ou excluido, e sorteia outro caso seja
      cardValido = true;
      sortear = Math.floor(Math.random() * questoes.length);

      if (sortear === getNPergunta || sortear-1 === questoes.find((e) => e.id).acertou){
        cardValido = false;
      }
    }while(cardValido === false);
    
    setCardAtual(questao[sortear]);
    setNPergunta(sortear);

    setHideDica(false);
  }

  const sumParaProxima = (event) => {
    let localNPergunta = getNPergunta;
  
    const updateStateAndCheck = () => {
      localNPergunta += 1;
      // Volta para o 1o flashcard caso esteja no ultimo
      if (localNPergunta >= questoes.length) {
        localNPergunta = 0;
      }
      setNPergunta(localNPergunta);
      setCardAtual(questao[localNPergunta]);

      // Repete o loop caso a pergunta ja tenha sido acertada
      if (questoes[localNPergunta].acertou) {
        setTimeout(updateStateAndCheck, 0);
      }
    };
    // Inicia o loop
    updateStateAndCheck();
    //setHideDica(false);
  };

  // Volta pra pergunta anterior
  const decParaAnterior = (event) => {
    let localNPergunta = getNPergunta;
  
    const updateStateAndCheck = () => {
      localNPergunta -= 1;
      // Volta para o 1o flashcard caso esteja no ultimo
      if (localNPergunta < 0) {
        localNPergunta = questoes.length-1;
      }
      setNPergunta(localNPergunta);
      setCardAtual(questao[localNPergunta]);

      // Repete o loop caso a pergunta ja tenha sido acertada
      if (questoes[localNPergunta].acertou) {
        setTimeout(updateStateAndCheck, 0);
      }
    };
    // Inicia o loop
    updateStateAndCheck();
    //setHideDica(false);
  }

  const voltaPrimeira = (event) => {
    var cont = 0;
    while(questao[cont].acertou){
      cont++;
    }
    setCardAtual(questao[cont]);
    setNPergunta(0); 
  }

  const acertosSum = (event) => {
    // Soma 1 a qnt de acertos totais
    setAcertos(() => getAcertos + 1);
    // Exclui card atual da lista
    const perguntaSelecionada = questoes.find((e) => e.id === getNPergunta+1);
    perguntaSelecionada.acertou = true;
    // Sorteia um novo card da lista
    sortearCard();
  }

  return(
    <>
      <section className={ styles.infos }>
        <div className={ styles.infos__acertos }>
          <h1 className={ styles.infos__acertos__num }>Acertos: { getAcertos } de { questoes.length } perguntas</h1>
        </div>
      </section>

      <button className={styles.botoes} type='button' onClick={ sortearCard }>
      <div className={styles.icones + ' ' + styles.sortear}></div>
        Sortear Card
      </button>

      {/* Caso tudo esteja respondido ou se ainda existe um card*/}
      { getAcertos === 15 ? <Fim/> 
        : cardAtual && ( 
          <div>
            <div>
              <Cards id={ cardAtual.id } quest={ cardAtual.pergunta } resposta={ cardAtual.resposta } dica1={ cardAtual.dica1 } dica2={ cardAtual.dica2 } dica3={ cardAtual.dica3 } setNPergunta={ sumParaProxima } decParaAnterior={ decParaAnterior } adicionarAcerto={ acertosSum } voltarPraPrimeira={voltaPrimeira} hideDicas={hideDica}/>
              { console.log(cardAtual) }
            </div>
            <Link to={ '../editar' }>
              <div className={ styles.botoes__editar }>
                <img className={ styles.botoes__editar__edit } src={ Pen } alt="Editar Pergunta" />
              </div>
            </Link>
          </div>
      )}
    </>
  )
}