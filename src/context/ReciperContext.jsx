import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ReciperContext = createContext();

const ReciperProvider = ({ children }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [isFoodOrDrink, setIsFoodOrDrink] = useState('comidas');
  const [endPoint, setEndPoint] = useState('random.php');
  const [recipe, setRecipe] = useState();
  const [category, setCategory] = useState('All');
  const [inProgress, setInProgress] = useState(false);
  const context = {
    userData,
    setUserData,
    isFoodOrDrink,
    setIsFoodOrDrink,
    inProgress,
    setInProgress,
    endPoint,
    setEndPoint,
    recipe,
    setRecipe,
    category,
    setCategory,
  };
  return (
    <ReciperContext.Provider value={context}>
      {children}
    </ReciperContext.Provider>
  );
};

export { ReciperContext, ReciperProvider as Provider };

ReciperProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
