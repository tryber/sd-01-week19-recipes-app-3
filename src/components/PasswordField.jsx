import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { UserDataContext } from '../context/UserDataContext';

const handleChange = (FiedlValue, setPassword, setIsPasswordFormatted) => {
  setPassword(FiedlValue);
  if (FiedlValue.length >= 6) {
    setIsPasswordFormatted(true);
  } else {
    setIsPasswordFormatted(false);
  }
};

const PasswordField = () => {
  const {
    methods: {
      setPassword,
      setIsPasswordFormatted,
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
        onChange={(e) => handleChange(e.target.value, setPassword, setIsPasswordFormatted)}
        isValid={isPasswordFormatted}
        isInvalid={!isPasswordFormatted}
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Your password must contain at least 6 characters
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default PasswordField;
