import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../icons/avatar.png';
import './PageUser.css';
import LowerMenu from './LowerMenu';

const btnForComponentPerfil = (text, router) => (
  <Link to={`/${router}`}>
    <button type="button" className="btn">
      {text}
    </button>
  </Link>
);

const btnLogout = (text, router) => (
  <Link to={`/${router}`}>
    <button type="button" className="btn" onClick={() => localStorage.clear()}>
      {text}
    </button>
  </Link>
);

const PageUser = () => {
  const email = JSON.parse(localStorage.user.email);
  return (
    <div className="component">
      <div className="conteiner">
        <Link to="/receitas/comidas">
          <img className="img-perfil" src={Avatar} alt="Icone de perfil" />
        </Link>
        <h3>Perfil</h3>
      </div>
      <h4>{email}</h4>
      <div>
        {btnForComponentPerfil('Receitas Feitas', 'receitasfeitas')}

        {btnForComponentPerfil('Receitas Favoritas', 'receitasfavoritas')}

        {btnLogout('Sair', '')}
      </div>
      <LowerMenu />
    </div>
  );
};

export default PageUser;
