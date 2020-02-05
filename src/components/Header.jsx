import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LinkLogin from './LinkLogin';
import BotaoSearch from './BotaoSearch';
import SearchBar from './SearchBar';

const Header = ({ location }) => {
  const title = location.pathname;
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState({ typeSearch: 'i', search: '' });
  return (
    <div>
      <LinkLogin />
      <h2>{title}</h2>
      <BotaoSearch changeShowSearch={() => setShowSearch(!showSearch)} />
      {showSearch && <SearchBar changeSearch={setSearch} search={search} />}
    </div>
  );
};

export default Header;

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
