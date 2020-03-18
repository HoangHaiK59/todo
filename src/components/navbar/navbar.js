import React from 'react';
import { Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import './navbar.css';

import SignOutButton from '../signout';

const myStyle = {
  color: '#b3b3b3',
  fontSize: '1rem',
  fontWeight: 'bold'
}

export const NavBar = () => {
  return (<div className="navbar-wrap-content">
    <div className="navbar-container">
      <div className="navbar__header">
        <div className="brand">

        </div>
        <div className="applink">
          <Link to="/myday">My day</Link>
        </div>
      </div>
      <div className="navbar__content">
      </div>
      <div className="navbar__end">
          <div className="info-container">
            <div className="info"></div>
            <div className="info">
              <SignOutButton />
            </div>
            <div className="info">
              <Link to="/signin">SignIn</Link>
            </div>
          </div>
      </div>
    </div>
  </div>)
}