import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ReciperContext = createContext();
const ReciperProvider = ({ children }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [search, setSearch] = useState({ typeSearch: 'ingredient', search: '' });

  const context = {
    userData,
    setUserData,
    search,
    setSearch,
  };

  return (
    <ReciperContext.Provider value={context}>
      {children}
    </ReciperContext.Provider>
  );
};
export { ReciperContext, ReciperProvider as Provider };

ReciperProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
