import React from 'react';
import Navbar from 'react-bootstrap/es/Navbar.js';
import Nav from 'react-bootstrap/es/Nav.js';

import Contacts from './contacts';

export default (props) => {
  const {title, address, contacts} = props.navigation;

  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <h1>
            <div className="brand">{title}</div>
            <div className="brand-description">
              Оптовая продажа чековой ленты и термоэтикетки
            </div>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <Contacts address={address} contacts={contacts}/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

