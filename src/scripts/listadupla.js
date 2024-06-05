import Cards from '../components/cards';

import questoes from '../data/questoes'

class Flashcard {
    constructor(pergunta, resposta) {
      this.pergunta = questoes.pergunta;
      this.resposta = questoes.resposta;
      this.id = questoes.id
      // DELETE ESTE COMENTARIO
    }
  }

const cards = [];
  function getAllCards(){
    questoes.map((data) => (
      cards[data.id - 1] = <Cards key={ data.id } quest={ data.pergunta } answ={ data.resposta }/>
    ))
  }

function shuffle() {
    for (let i = 1; i <= questoes.length; i--) {
        const j = Math.floor(Math.random() * questoes.length);
    }
}

const listaAux = shuffle();
console.log(listaAux); // Deve exibir os flashcards embaralhados

