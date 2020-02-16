import React from 'react';
import PropTypes from 'prop-types';
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

SubmitButton.propTypes = {
  emailValid: PropTypes.bool.isRequired,
  passwordValid: PropTypes.bool.isRequired,
};

export default SubmitButton;
