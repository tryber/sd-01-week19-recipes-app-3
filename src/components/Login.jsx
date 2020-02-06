import React, { useContext } from 'react';

import { UserDataProvider } from '../context/UserDataContext';
import { UserDataContext } from '../context/UserDataContext';

import Form from 'react-bootstrap/Form';

import EmailField from './EmailField';
import PasswordField from './PasswordField';

import SubmitButton from '../components/SubmitButton';

const Login = () => {


  const handleSubmit = (event) => {
    event.preventDefault();
  }

  // export const readFavoritePokemonIds = () => (
  //   JSON.parse(localStorage.getItem('favoritePokemonIds')) || []
  // );

  // const saveFavoritePokemons = (pokemons) => (
  //   localStorage.setItem('favoritePokemonIds', JSON.stringify(pokemons))
  // );



  return (
    <UserDataProvider>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <EmailField />
        <PasswordField />
        <SubmitButton />
      </Form>
    </UserDataProvider>
  );
}

export default Login;
