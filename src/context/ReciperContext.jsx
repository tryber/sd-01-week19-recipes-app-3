import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ReciperContext = createContext();
const ReciperProvider = ({ children }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const context = {
    userData,
    setUserData,
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
