import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getRandomRecipes } from '../service/FetchingAPI';
import Loading from './Loading';
import ListRecommendations from './ListRecommendations';

const invertKeyData = (verify) => {
  if (verify === 'comidas') return 'cocktail';
  return 'meal';
};

const getType = (type) => {
  if (type === 'comidas') return 'bebidas';
  return 'comidas';
};

const Recommendation = ({ foodordrink, id }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [recommendations, setRecommendations] = useState();
  useEffect(() => {
    if (!isFetching) {
      setIsFetching(true);
      getRandomRecipes(invertKeyData(foodordrink))
        .then((result) => {
          setIsFetching(false);
          setRecommendations(result.slice(0, 6));
        });
    }
  }, [id]);
  if (isFetching) return <Loading />;
  return (
    <div className="Recommendation">
      <ListRecommendations recipes={recommendations} type={getType(foodordrink)} />
    </div>
  );
};

export default Recommendation;

Recommendation.propTypes = {
  foodordrink: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
