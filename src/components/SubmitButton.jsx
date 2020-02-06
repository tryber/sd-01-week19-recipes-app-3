import React from 'react';
import Button from 'react-bootstrap/Button';

const SubmitButton = ({ emailValid, passwordValid }) => {
  const fieldsValid = emailValid && passwordValid;

  return (
    <Button
      type="submit"
      data-testid="login-submit-btn"
      disabled={!fieldsValid}
      variant={!fieldsValid ? 'outline-danger' : 'outline-success'}
    > Entrar </Button>
  );
};

export default SubmitButton;
