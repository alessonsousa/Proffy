import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import Prefil from '../../assets/images/wtsp.jpeg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
  <header>
    <img src={Prefil} alt=""/>
    <div>
      <strong>Alesson Sousa</strong>
      <span>Dev</span>
    </div>
  </header>
  <p>
    Um dos melhores programadores Br que o proffy tem.
    <br/>
    <br/>
    Apaixonado por o que faz.
  </p>

  <footer>
    <p>
      Preço/hora
      <strong>R$ 100.00</strong>
    </p>
    <button type="button">
      <img src={whatsappIcon} alt="whatsapp"/>
      Entra em contato
    </button>
  </footer>
</article>
    );
}

export default TeacherItem;
