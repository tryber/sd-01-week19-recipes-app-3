import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

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
  emailValid: PropTypes.string,
  passwordValid: PropTypes.string,
};

SubmitButton.defaultProps = {
  emailValid: '',
  passwordValid: '',
};

export default SubmitButton;
