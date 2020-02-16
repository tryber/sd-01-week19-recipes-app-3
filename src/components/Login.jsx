import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';
import { ReciperContext } from '../context/ReciperContext';
import EmailField from './EmailField';
import PasswordField from './PasswordField';
import SubmitButton from '../components/SubmitButton';
import { useHistory } from 'react-router-dom';
import { saveUser } from '../LocalStorage/LocalStorage';

const Login = () => {
  const { setUserData, userData } = useContext(ReciperContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserData({ email, password });
    saveUser(email);
  };
  if (userData.email) return <Redirect to="/receitas/comidas" />;
  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <EmailField emailValid={emailValid} setEmailValid={setEmailValid} setEmail={setEmail} />
        <PasswordField
          setPassword={setPassword}
          setPasswordValid={setPasswordValid}
          passwordValid={passwordValid}
        />
        <SubmitButton emailValid={emailValid} passwordValid={passwordValid} />
      </Form>
    </div>
  );
};

export default Login;
