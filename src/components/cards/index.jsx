import { useState } from "react";

import 'animate.css';
import styles from './cards.module.css';

import Frente from "./faces/frente/frente";
import Verso from "./faces/verso/verso";
import Dicas from "../dicas";

export default function Cards(props){

  const [flipped, setFlipped] = useState(false);
  const [mostrarDica, setMostrarDica] = useState(props.hideDicas);

  return(
    <div className={ styles.main }>
      <div className={flipped ? "animate__flipOutY" : "animate__flipInY" + ' ' + "animate__animated"}>
        { 
          flipped ? <Verso id={ props.id } resposta={ props.resposta } flipped={ flipped } setFlip={ setFlipped } addAcerto={ props.adicionarAcerto } voltarPraPrimeira={props.voltarPraPrimeira}/> 
          : <Frente id={ props.id } quest={ props.quest } flipped={ flipped } setFlip={ setFlipped } setNPergunta={ props.setNPergunta } voltarNPergunta={ props.decParaAnterior } toggle={ mostrarDica } pedirDica={ setMostrarDica } esconderDica={ mostrarDica }/>
        }
        { 
          flipped ? '' : (mostrarDica && (<Dicas id={ props.id } dica1={ props.dica1 } dica2={ props.dica2 } dica3={ props.dica3 }/>))
        }
      </div>
    </div>
  )
}
