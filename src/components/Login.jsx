import React, { useState } from 'react';

const Login = () => {
  const [isEmailFormatted, setIsEmailFormatted] = useState(false);
  const [isPasswordFormatted, setIsPasswordFormatted] = useState(false);
  const isFieldsFormatted = isEmailFormatted && isPasswordFormatted;
  const checkFormat = (type, value) => {
    switch (type) {
      case 'email':
        value
          .match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ?
          setIsEmailFormatted(true) : setIsEmailFormatted(false)
        break;
      case 'password':
        value.length >= 6 ? setIsPasswordFormatted(true) : setIsPasswordFormatted(false);
        break;
      default:
        return;
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => console.log(e.target)}>
        <input
          type="email"
          placeholder="Email"
          required="required"
          data-testid="email-input"
          onChange={(e) => checkFormat(e.target.type, e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          required="required"
          data-testid="password-input"
          minLength="6"
          onChange={(e) => checkFormat(e.target.type, e.target.value)}
        />
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={!isFieldsFormatted}
        > Entrar </button>
      </form>
    </div>
  );
}

export default Login;
