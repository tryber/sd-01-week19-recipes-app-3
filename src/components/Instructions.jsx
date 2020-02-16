import React from 'react';
import PropTypes from 'prop-types';

const Instructions = ({ instructions }) => (
  <div>
    <p>
      {instructions}
    </p>
  </div>
);

export default Instructions;

Instructions.propTypes = {
  instructions: PropTypes.string.isRequired,
};
