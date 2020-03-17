import React from 'react';
import { Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

const myStyle = {
    color: '#b3b3b3',
    fontSize: '1rem',
    fontWeight: 'bold'
}

export const NavBar = () => {
    return  (<div className="navbar-wrap-content">
    <Nav vertical >
      <NavItem>
        <NavLink style={myStyle} href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink style={myStyle} href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink style={myStyle} href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink style={myStyle} disabled href="#">Disabled Link</NavLink>
      </NavItem>
    </Nav>
    <hr />
    <div style={{display: 'flex', width: '100%', height: '30px', marginLeft:'15px'}}>
        <button title="Add">+</button>
        <h4 style={{marginLeft: '5px'}}>My List</h4>
    </div>
    <Nav vertical>
      <NavLink style={myStyle} href="#">Link</NavLink> 
      <NavLink style={myStyle} href="#">Link</NavLink> 
      <NavLink style={myStyle} href="#">Another Link</NavLink> 
      <NavLink style={myStyle} disabled href="#">Disabled Link</NavLink>
    </Nav>
  </div> )
}