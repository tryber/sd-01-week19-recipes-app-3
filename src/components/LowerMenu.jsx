import React, { useContext } from 'react';
import { ReciperContext } from '../context/ReciperContext';
import { Link } from 'react-router-dom';
import Garfo from '../icons/garfo.png';
import Bussola from '../icons/bussola.png';
import Bebida from '../icons/bebida.png';

const LowerMenu = () => {
  const { setIsFoodOrDrink } = useContext(ReciperContext);
  return (
    <div className="conteiner">
      <Link to="/receitas/comidas">
        <button onClick={() => setIsFoodOrDrink('comidas')}>
          <img className="img-garfo" src={Garfo} alt="Garfo de comida" height="42" />
        </button>
      </Link>
      <Link to="/explorar">
        <img
          className="img-bussola"
          src={Bussola}
          alt="Bússola simbolizando home"
          height="42"
        />
      </Link>
      <Link to="/receitas/bebidas">
        <button onClick={() => setIsFoodOrDrink('bebidas')}>
          <img className="img-babida" src={Bebida} alt="Copo de bebida" height="42" />
        </button>
      </Link>
    </div>
  );
}
export default LowerMenu;
