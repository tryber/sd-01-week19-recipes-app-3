import React from 'react';
import { useHistory } from 'react-router-dom';

const ExplorerMenu = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Explorer</h1>
      <button
        data-testid="explore-food"
        onClick={() => history.push("/explorar/comidas")}
      >Explorar Comidas</button>
      <button
        data-testid="explore-drinks"
        onClick={() => history.push("/explorar/bebidas")}
      >Explorar Bebidas</button>
    </div>
  );
};

export default ExplorerMenu;
