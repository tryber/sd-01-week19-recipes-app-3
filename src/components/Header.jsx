import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProfileLink from './ProfileLink';
import BotaoSearch from './BotaoSearch';
import SearchBar from './SearchBar';

const Header = ({ location }) => {
  const title = location.pathname;
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState({ typeSearch: 'i', search: '' });
  console.log(search);
  return (
    <div>
      <ProfileLink />
      <h2>{title}</h2>
      <BotaoSearch changeShowSearch={() => setShowSearch(!showSearch)} />
      {showSearch && <SearchBar changeSearch={setSearch} />}
    </div>
  );
};

export default Header;

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
