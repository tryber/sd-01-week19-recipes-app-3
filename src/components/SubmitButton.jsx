import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

const SubmitButton = ({ emailValid, passwordValid }) => {
  const fieldsValid = emailValid && passwordValid;
  const history = useHistory();

  return (
    <Button
      type="submit"
      data-testid="login-submit-btn"
      disabled={!fieldsValid}
      variant={!fieldsValid ? 'outline-danger' : 'outline-success'}
      onClick={() => history.push("/comidas")}
    > Entrar </Button>
  );
};

SubmitButton.propTypes = {
  emailValid: PropTypes.bool.isRequired,
  passwordValid: PropTypes.bool.isRequired,
};

export default SubmitButton;
