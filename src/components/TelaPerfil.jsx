import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReciperContext } from '../context/ReciperContext';
import Avatar from '../icons/avatar.png';
import './TelaPerfil.css';
import LowerMenu from './LowerMenu';

const btnForComponentPerfil = (text, router) => (
  <Link to={`/${router}`}>
    <button type="button" className="btn">
      {text}
    </button>
  </Link>
);
const btnForComponentPerfilTypeSair = (text, router) => {
  const clear = () => localStorage.clear();
  return (
    <Link to={`/${router}`}>
      <button type="button" className="btn" onClick={() => clear()}>
        {text}
      </button>
    </Link>
  );
};
export default function TelaPerfil() {
  const { userData } = useContext(ReciperContext);
  return (
    <div className="component">
      <div className="conteiner">
        <Link to="/comidas">
          <img className="img-perfil" src={Avatar} alt="Icone de perfil" />
        </Link>
        <h3>Perfil</h3>
      </div>
      <h4>{userData.email}</h4>
      <div>
        <span>
          {btnForComponentPerfil('Receitas Feitas', 'receitasfeitas')}
        </span>
        <span>
          {btnForComponentPerfil('Receitas Favoritas', 'receitasfavoritas')}
        </span>
        <span>{btnForComponentPerfilTypeSair('Sair', '')}</span>
      </div>
      <LowerMenu />
    </div>
  );
}
