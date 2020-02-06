import React from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const handleChange = (FiedlValue, setEmail, setIsEmailFormatted) => {
  setEmail(FiedlValue);
  if (FiedlValue.match(/\S+@\S+\.\S+/)) {
    setIsEmailFormatted(true);
  } else {
    setIsEmailFormatted(false);
  }
};

const EmailField = ({ setEmail, setEmailValid, emailValid }) => (
  <Form.Group controlId="formBasicEmail">
    <Form.Control
      type="email"
      placeholder="Email"
      required="required"
      data-testid="email-input"
      onChange={(e) => handleChange(e.target.value, setEmail, setEmailValid)}
      isValid={emailValid}
      isInvalid={!emailValid}
    />
    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    <Form.Control.Feedback type="invalid">
      Enter a valid email address
      </Form.Control.Feedback>
  </Form.Group>
);


EmailField.propTypes = {
  setEmail: PropTypes.func.isRequired,
  setEmailValid: PropTypes.func.isRequired,
  emailValid: PropTypes.bool.isRequired,
};

export default EmailField;
