import  { useState } from 'react';
import { Link } from "react-router-dom";

import Cards from '../../components/cards';

import { questoes } from '../../data/questoes';

import styles from './principal.module.css';

export default function Principal(){  

  const cards = [];
  function getAllCards(){
    questoes.map((data) => (
      cards[data.id - 1] = <Cards key={ data.id } quest={ data.pergunta } answ={ data.resposta }/>
    ))
  }

  const [questoes, setQuestoes] = useState();
  const [cardAtual, setCardAtual] = useState();

  function sortearCard(){
    const sortear = Math.floor(Math.random() * cards.length);
    //setSorteado(sortear);
    setCardAtual(cards[sortear]);
  };

// Chamada para remover o flashcard atual
const removerFlashcardAtual = () => {
  setQuestoes(questoes.filter(questoes => questoes.id !== cardAtual));
  setCardAtual(); 
};

  return(
    <section className={ styles.menu_principal }>
      <h1 className={ styles.titulo } lang='pt-BR' style={{ color: 'white' }}>Flashcards Fênix</h1>
      <Link to={ '../jogo' }>
        <button className={ styles.botoes } type='button' onClick={ sortearCard }>Sortear Cartão</button>
      </Link>
      <Link to={ '../editar' }>
        <button className={ styles.botoes } type='button' >Editar Cartões</button>
      </Link>
    </section>
  )
}
