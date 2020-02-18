import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProfileLink from './ProfileLink';
import SearchButton from './SearchButton';
import SearchBar from './SearchBar';
import './Header.css';

const Header = ({ title, isDisabled=true }) => {
  const [isShowSearch, setIsShowSearch] = useState(false);
  return (
    <div className="Header">
      <ProfileLink />
      <h2>{title}</h2>
      <SearchButton isDisabled={isDisabled} changeShowSearch={() => setIsShowSearch(!isShowSearch)} />
      {isShowSearch && <SearchBar />}
    </div>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
