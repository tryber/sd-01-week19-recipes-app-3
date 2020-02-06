import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFormatted, setIsEmailFormatted] = useState(false);
  const [isPasswordFormatted, setIsPasswordFormatted] = useState(false);

  const context = {
    data: {
      email,
      password,
    },
    checkData: {
      isEmailFormatted,
      isPasswordFormatted,
    },
    methods: {
      setEmail,
      setPassword,
      setIsEmailFormatted,
      setIsPasswordFormatted,
    },
  };

  return (
    <UserDataContext.Provider value={context}>
      {children}
    </UserDataContext.Provider>
  );
};

UserDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
