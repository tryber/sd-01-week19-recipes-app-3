import React, { createContext, useState } from 'react';

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
