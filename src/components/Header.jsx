import React, { useState } from 'react';
import LinkLogin from './LinkLogin';
import BotaoSearch from './BotaoSearch';
import SearchBar from './SearchBar';

const Header = ({ location }) => {
  const title = location.pathname;
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div>
      <LinkLogin />
      <h2>{title}</h2>
      <BotaoSearch changeShowSearch={() => setShowSearch(!showSearch)} />
      {showSearch && <SearchBar />}
    </div>
  )
};

export default Header;

BotaoSearch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};
