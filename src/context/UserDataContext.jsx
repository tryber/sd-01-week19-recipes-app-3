import React, { createContext, useState } from 'react';

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
        return;
    }
  }

  const checkingFormat = (FieldType, FieldValue) => {
    switch (FieldType) {
      case 'email':
        FieldValue
          .match(/\S+@\S+\.\S+/) ?
          setIsEmailFormatted(true) : setIsEmailFormatted(false);
        break;
      case 'password': {
        FieldValue.length >= 6 ? setIsPasswordFormatted(true) : setIsPasswordFormatted(false);
        break;
      }
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
