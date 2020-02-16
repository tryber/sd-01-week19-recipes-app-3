import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../icons/avatar.png';
import './ProfileLink.css';

const ProfileLink = () => (
  <Link className="ProfileLink" to="/perfil">
    <img src={Profile} alt="Profile link" />
  </Link>
);

export default ProfileLink;
