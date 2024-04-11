import  { useState } from 'react';

import Cards from '../../components/cards';

import { questoes } from '../../data/questoes';

import styles from './Editar.module.css';

export default function Editar() {

  const cards = [];
  function getAllCards(){
    questoes.map((data) => (
      cards[data.id - 1] = <Cards key={ data.id } quest={ data.pergunta } answ={ data.resposta }/>
    ))
  }

  const [questao, setQuestao] = useState(questoes);
  const [cardAtual, setCardAtual] = useState();

  
  function remover(){
    setQuestao(questoes.filter(questao => !questao.excluido));
  }

  return (
    <div>   
      {questoes.map((questao) => (
        !questao.excluido && (
        <div>
          <Cards id={ cardAtual.id } quest={ cardAtual.pergunta } answ={ cardAtual.resposta }/>
        </div>)))
        }
        <button onClick={remover}>Remover Cards</button>
    </div>
  );
   
}
