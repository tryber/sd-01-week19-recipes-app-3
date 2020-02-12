import React from 'react';
import { Link } from 'react-router-dom';
import Garfo from '../icons/garfo.png';
import Bussola from '../icons/bussola.png';
import Bebida from '../icons/bebida.png';

const LowerMenu = () => (
  <div className="conteiner">
    <Link to="/comidas">
      <img className="img-garfo" src={Garfo} alt="Garfo de comida" height="42" />
    </Link>
    <Link to="/">
      <img
        className="img-bussola"
        src={Bussola}
        alt="Bússola simbolizando home"
        height="42"
      />
    </Link>
    <Link to="/bebidas">
      <img className="img-babida" src={Bebida} alt="Copo de bebida" height="42" />
    </Link>
  </div>
);

export default LowerMenu;
