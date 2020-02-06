import React from 'react';
import Form from 'react-bootstrap/Form';

const handleChange = (FiedlValue, setPassword, setIsPasswordFormatted) => {
  setPassword(FiedlValue);
  if (FiedlValue.length >= 6) {
    setIsPasswordFormatted(true);
  } else {
    setIsPasswordFormatted(false);
  }
};

const PasswordField = ({ setPassword, setPasswordValid, passwordValid }) => {
  return (
    <Form.Group controlId="formBasicEmail">
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
};

export default PasswordField;
