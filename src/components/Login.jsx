import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form >
            <input
            type="email"
            placeholder="Email"
            required="required"
            data-testid="email-input"
            />
            <input
            type="password"
            placeholder="Senha"
            required="required"
            data-testid="password-input"
            minLength="6"
            />
            <button
            type="submit"
            data-testid="login-submit-btn"
            > Entrar </button>
      </form>
    </div>
  );
}

export default Login;
