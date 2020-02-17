import React from 'react';
import { Link } from 'react-router-dom';

const ExplorerMenu = () => (
  <div>
    <h1>Explorer</h1>
    <Link
      data-testid="explore-food"
      to="/explorar/comidas"
    >Explorar Comidas</Link>
    <Link
      data-testid="explore-drinks"
      to="/explorar/bebidas"
    >Explorar Bebidas</Link>
  </div>
);

export default ExplorerMenu;
