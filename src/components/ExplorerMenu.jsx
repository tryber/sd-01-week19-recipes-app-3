import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import LowerMenu from './LowerMenu';

const ExplorerMenu = () => (
  <div>
    <Header title="Explorar" />
    <h1>Explorer</h1>
    <Link
      data-testid="explore-food"
      to="/explorar/comidas"
    >Explorar Comidas</Link>
    <Link
      data-testid="explore-drinks"
      to="/explorar/bebidas"
    >Explorar Bebidas</Link>
    <LowerMenu />
  </div>
);

export default ExplorerMenu;
