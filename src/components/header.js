import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

import Contacts from './contacts';

export default (props) => {
    const {title, address, contacts} = props.navigation;

    return (
        <Navbar fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <h1 className="brand">{title}</h1>
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

