import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { ReciperContext } from '../context/ReciperContext';
import EmailField from './EmailField';
import PasswordField from './PasswordField';
import SubmitButton from '../components/SubmitButton';

const Login = () => {
  const { setUserData } = useContext(ReciperContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserData({ email, password });
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('meals-token', '1');
    localStorage.setItem('cocktails-token', '1');
  };

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <EmailField emailValid={emailValid} setEmailValid={setEmailValid} setEmail={setEmail} />
        <PasswordField setPassword={setPassword} setPasswordValid={setPasswordValid} passwordValid={passwordValid} />
        <SubmitButton emailValid={emailValid} passwordValid={passwordValid} />
      </Form>
    </div>
  );
};

export default Login;
