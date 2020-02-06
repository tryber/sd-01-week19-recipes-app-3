import React from 'react';
import Form from 'react-bootstrap/Form';
import { UserDataProvider } from '../context/UserDataContext';
import EmailField from './EmailField';
import PasswordField from './PasswordField';
import SubmitButton from '../components/SubmitButton';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <UserDataProvider>
      <h1>Login</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <EmailField />
        <PasswordField />
        <SubmitButton />
      </Form>
    </UserDataProvider>
  );
};

export default Login;
