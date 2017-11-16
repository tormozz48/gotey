import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Copyright from './copyright';

export default () => {
    return (
        <Navbar fixedBottom className="footer">
            <Navbar.Collapse>
                <Nav pullRight>
                    <Copyright/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
