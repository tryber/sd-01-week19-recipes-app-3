import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ReciperContext = createContext();
const ReciperProvider = ({ children }) => {
  const [henriqueBolivarDoug, sethenriqueBolivarDoug] = useState(false);

  const issoNemSeraUsado = (value) => sethenriqueBolivarDoug(value);

  const context = {
    henriqueBolivarDoug,
    sethenriqueBolivarDoug,
    issoNemSeraUsado,
  };
  return (
    <ReciperContext.Provider value={context}>
      {children}
    </ReciperContext.Provider>
  );
};
export { ReciperContext, ReciperProvider as Provider };

ReciperProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
