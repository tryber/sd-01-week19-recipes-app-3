import React, { useContext } from 'react';

import { UserDataContext } from '../context/UserDataContext';

import Form from 'react-bootstrap/Form';

const PasswordField = () => {
  const {
    methods: {
      fillingFields,
      checkingFormat,
    },
    checkData: {
      isPasswordFormatted,
    },
  } = useContext(UserDataContext);

  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Control
        type="password"
        placeholder="Senha"
        required="required"
        name="password"
        data-testid="password-input"
        onChange={(e) => {
          checkingFormat(e.target.type, e.target.value);
          fillingFields(e.target.type, e.target.value);
        }}
        isValid={isPasswordFormatted}
        isInvalid={!isPasswordFormatted}
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">Your password must contain at least 6 characters</Form.Control.Feedback>
    </Form.Group>
  );
}

export default PasswordField;
