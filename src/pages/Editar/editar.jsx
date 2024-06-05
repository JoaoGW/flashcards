import { useState } from 'react';
import { Link } from "react-router-dom";

import Cards from '../../components/cards';
import Pergunta from '../../components/editar/Editar/perguntas';

import { questoes } from '../../data/questoes';

import styles from './Editar.module.css';

export default function Editar() {

  const [questao, setQuestao] = useState(questoes);
  const [cardAtual, setCardAtual] = useState();

  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [dica1, setDica1] = useState('');
  const [dica2, setDica2] = useState('');
  const [dica3, setDica3] = useState('');

  const [PHnumpergunta, setPHnumpergunta] = useState(0);
  const [PHpergunta, setPHpergunta] = useState('');
  const [PHresposta, setPHrespota] = useState('');
  const [PHdica1, setPHDica1] = useState('');
  const [PHdica2, setPHDica2] = useState('');
  const [PHdica3, setPHDica3] = useState('');

  const cards = [];
  function getAllCards() {
    questoes.map((data) => (
      cards[data.id - 1] = <Cards key={data.id} quest={data.pergunta} answ={data.resposta} />
    ))
  }

  const adicionarFlashcard = () => {

    console.log("a " + questoes[questoes.length-1].pergunta);
    const idDoUltimo = questoes[questoes.length-1].id;

    const novaQuestao = {
      id: idDoUltimo+1,
      pergunta: pergunta,
      resposta: resposta,
      dica1: dica1,
      dica2: dica2,
      dica3: dica3,
      ativo: false,
      excluido: false,
      acertou: false
    };

    // atualiza a pagina pra mostrar as perguntas
    setPHnumpergunta(0);
    questao.push(novaQuestao);
    setQuestao(questao);
    
    // limpa os valores do input
    setPergunta('');
    setResposta('');
    setDica1('');
    setDica2('');
    setDica3('');
  };

  const removerFlashcard = () => {
    const perguntaSelecionada = questoes.find((e) => e.id === PHnumpergunta);
    setPHnumpergunta(0);
    // perguntaSelecionada.excluido = true;
    questoes.splice(perguntaSelecionada.id-1,1);
    // console.log(perguntaSelecionada);

    // atualiza a pagina pra mostrar as perguntas
    // const removerQuestao = questao.indexOf(perguntaSelecionada.id);
    // questao.pop(perguntaSelecionada.id);

    // limpa os valores do input
    setPergunta('');
    setResposta('');
    setDica1('');
    setDica2('');
    setDica3('');
    setIsVisible(true);
  }

  const substFlashcard = () => {
    const perguntaSelecionada = questoes.find((e) => e.id === PHnumpergunta);
    perguntaSelecionada.pergunta = pergunta;
    perguntaSelecionada.resposta = resposta;
    perguntaSelecionada.dica1 = dica1;
    perguntaSelecionada.dica2 = dica2;
    perguntaSelecionada.dica3 = dica3;
    // atualiza a pagina pra mostrar as perguntas
    setQuestao([...questao, '']);
    // limpa os valores do input
    setPergunta('');
    setResposta('');
    setDica1('');
    setDica2('');
    setDica3('');
  }

  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => setIsVisible(false);

  return (
    <div className={styles.main}>
      <Link to={ '../jogo' }>
        <button className={styles.voltar} title="Sair do editar">
            <div className={styles.iconeVolt}></div>
        </button>
      </Link>
      <div className={styles.menuEditar}>
        <div className={styles.tituloMenu}>
          Selecione uma pergunta
        </div>
        {questoes.map((data) => (            
          data.excluido ? '' : <Pergunta numPergunta={data.id} pergunta={data.pergunta} selecionar={function () {
            setPHnumpergunta(data.id);
            setPHpergunta(data.pergunta);
            setPHrespota(data.resposta);
            setPHDica1(data.dica1);
            setPHDica2(data.dica2);
            setPHDica3(data.dica3);
            setIsVisible(false)}
          } />
        ))}
      </div>
      <div className={styles.menuModificar}>

        <div className={styles.menuEditarTitulo}>
          <div> Edição de flashcards </div>
          <div className={styles.menuEditarTitulo2}>
            Selecionado:
            <div className={styles.numeroTitulo}> {PHnumpergunta} </div>
          </div>

        </div>
        <div className={styles.menuTextos}> Enunciado </div>
        <input value={pergunta} type="text" onChange={(e) => setPergunta(e.target.value)} placeholder={PHpergunta} className={styles.caixaTexto} style={{ marginBottom: '1em' }} />
        <div className={styles.menuTextos}> Resposta </div>
        <input value={resposta} type="text" onChange={(e) => setResposta(e.target.value)} placeholder={PHresposta} className={styles.caixaTexto} style={{ marginBottom: '1em' }} />
        <div className={styles.menuTextos}> Dica 1 </div>
        <input value={dica1} type="text" onChange={(e) => setDica1(e.target.value)} placeholder={PHdica1} className={styles.caixaTexto} style={{ marginBottom: '1em' }} />
        <div className={styles.menuTextos}> Dica 2 </div>
        <input value={dica2} type="text" onChange={(e) => setDica2(e.target.value)} placeholder={PHdica2} className={styles.caixaTexto} style={{ marginBottom: '1em' }} />
        <div className={styles.menuTextos}> Dica 3 </div>
        <input value={dica3} type="text" onChange={(e) => setDica3(e.target.value)} placeholder={PHdica3} className={styles.caixaTexto} style={{ marginBottom: '1em' }} />

        <div className={styles.divBotoes}>
          <button onClick={substFlashcard} className={isVisible ? styles.menuEditarBotaoDesativado : styles.menuEditarBotao} disabled={isVisible} title={isVisible ? "Selecione um flashcard primeiro" : ''}> <div className={styles.iconeSubst}></div> Substituir flashcard </button>
          <button onClick={adicionarFlashcard} className={styles.menuEditarBotao}> <div className={styles.iconeAdd}></div> Criar novo flashcard </button>
          <button onClick={removerFlashcard} className={isVisible ? styles.menuEditarBotaoDesativado : styles.menuEditarBotao} disabled={isVisible} title={isVisible ? "Selecione um flashcard primeiro" : ''}> <div className={styles.iconeDel}></div> Deletar flashcard </button>
        </div>
      </div>
    
    </div>  
  );
} 