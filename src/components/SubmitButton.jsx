import React, { useContext } from 'react';

import { UserDataContext } from '../context/UserDataContext';

import Button from 'react-bootstrap/Button'

const SubmitButton = () => {
  const {
    checkData: {
      isEmailFormatted,
      isPasswordFormatted,
    },
    data: {
      email,
    },
  } = useContext(UserDataContext);

  const isFieldsFormatted = isEmailFormatted && isPasswordFormatted;

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('meals-token', '1');
    localStorage.setItem('cocktails-token', '1');
  }

  return (
    <Button
      type="submit"
      data-testid="login-submit-btn"
      disabled={!isFieldsFormatted}
      variant={!isFieldsFormatted ? "outline-danger" : "outline-success"}
      onClick={handleClick}
    > Entrar </Button>
  );
}

export default SubmitButton;
