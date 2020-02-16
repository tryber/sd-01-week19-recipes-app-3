import React from 'react';

const Explorer = ({ match: { url } }) => {
  return (
    <div>
      <h1>{url}</h1>
    </div>
  );
};

export default Explorer;
