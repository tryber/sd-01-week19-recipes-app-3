import React from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const handleChange = (FiedlValue, setPassword, setIsPasswordFormatted) => {
  setPassword(FiedlValue);
  if (FiedlValue.length >= 6) {
    setIsPasswordFormatted(true);
  } else {
    setIsPasswordFormatted(false);
  }
};

const PasswordField = ({ setPassword, setPasswordValid, passwordValid }) => (
  <Form.Group controlId="formBasicPassWord">
    <Form.Control
      type="password"
      placeholder="Senha"
      required="required"
      name="password"
      data-testid="password-input"
      onChange={(e) => handleChange(e.target.value, setPassword, setPasswordValid)}
      isValid={passwordValid}
      isInvalid={!passwordValid}
    />
    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    <Form.Control.Feedback type="invalid">
      Your password must contain at least 6 characters
      </Form.Control.Feedback>
  </Form.Group>
);

PasswordField.propTypes = {
  setPassword: PropTypes.func.isRequired,
  setPasswordValid: PropTypes.func.isRequired,
  passwordValid: PropTypes.bool.isRequired,
};

export default PasswordField;
