import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

import Contacts from './contacts';

export default (props) => {
    const {title, contacts} = props.navigation;

    return (
        <Navbar fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">{title}</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <Contacts contacts={contacts}/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

