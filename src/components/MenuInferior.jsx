import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/MenuInferior.css';
import Garfo from '../icons/garfo.png';
import Bussola from '../icons/bussola.png';
import Bebida from '../icons/bebida.png';

const MenuInferior = () => (
  <div className="conteiner">
    <Link to="/comidas">
      <img className="img-garfo" src={Garfo} alt="Garfo de comida" />
    </Link>
    <Link to="/">
      <img
        className="img-bussola"
        src={Bussola}
        alt="Bússola simbolizando home"
      />
    </Link>
    <Link to="/bebidas">
      <img className="img-babida" src={Bebida} alt="Copo de bebida " />
    </Link>
  </div>
);

export default MenuInferior;
