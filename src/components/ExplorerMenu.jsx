import React from 'react';
import { useHistory } from 'react-router-dom';

const ExplorerMenu = () => {
  const history = useHistory();
  return (
    <div>
      <button
        data-testid="explore-food"
        onClick={() => history.push("/explorer/comidas")}
      >Explorar Comidas</button>
      <button
        data-testid="explore-drinks"
        onClick={() => history.push("/explorer/bebidas")}
      >Explorar Bebidas</button>
    </div>
  );
};

export default ExplorerMenu;
