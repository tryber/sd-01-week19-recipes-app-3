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

  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Control
        type="email"
        placeholder="Email"
        required="required"
        data-testid="email-input"
        onChange={(e) => {
          setEmail(e.target.value);
          if (e.target.value.match(/\S+@\S+\.\S+/)) {
            setIsEmailFormatted(true);
          } else {
            setIsEmailFormatted(false);
          }
        }}
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
