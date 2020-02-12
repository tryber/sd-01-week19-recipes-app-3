import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProfileLink from './ProfileLink';
import SearchButton from './SearchButton';
import SearchBar from './SearchBar';

const Header = ({ title }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <ProfileLink />
      <h2>{title}</h2>
      <SearchButton changeShowSearch={() => setShowSearch(!showSearch)} />
      {showSearch && <SearchBar />}
    </div>
  );
};

export default Header;

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
