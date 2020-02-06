import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { UserDataContext } from '../context/UserDataContext';

const EmailField = () => {
  const {
    methods: {
      setEmail,
      setIsEmailFormatted,
    },
    checkData: {
      isEmailFormatted,
    },
  } = useContext(UserDataContext);

  const handleChange = (event) => {
    setEmail(event.target.value);
    if (event.target.value.match(/\S+@\S+\.\S+/)) {
      setIsEmailFormatted(true);
    } else {
      setIsEmailFormatted(false);
    }
  }

  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Control
        type="email"
        placeholder="Email"
        required="required"
        data-testid="email-input"
        onChange={handleChange}
        isValid={isEmailFormatted}
        isInvalid={!isEmailFormatted}
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Enter a valid email address
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default EmailField;
