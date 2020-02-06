import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFormatted, setIsEmailFormatted] = useState(false);
  const [isPasswordFormatted, setIsPasswordFormatted] = useState(false);

  const fillingFields = (FieldType, FieldValue) => {
    switch (FieldType) {
      case 'email':
        setEmail(FieldValue);
        break;
      case 'password':
        setPassword(FieldValue);
        break;
      default:
        break;
    }
  };

  const checkingFormat = (FieldType, FieldValue) => {
    switch (FieldType) {
      case 'email':
        if (FieldValue.match(/\S+@\S+\.\S+/)) {
          setIsEmailFormatted(true);
        } else {
          setIsEmailFormatted(false);
        }
        break;
      case 'password':
        if (FieldValue.length >= 6) {
          setIsPasswordFormatted(true);
        } else {
          setIsPasswordFormatted(false);
        }
        break;
      default:
        break;
    }
  };

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
      fillingFields,
      checkingFormat,
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
