import React, { useState } from 'react';
import LinkLogin from './LinkLogin';
import BotaoSearch from './BotaoSearch';
import SearchBar from './SearchBar';

const Header = (props) => {
  const title = props.location.pathname;
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
  changeShowSearch= PropTypes.shape({
    location= PropTypes.shape = ({
      pathname= PropTypes.string.isRequired,
    }),
  }),
};
