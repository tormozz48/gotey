import React from 'react';
import Navbar from 'react-bootstrap/es/Navbar.js';
import NavbarCollapse from 'react-bootstrap/es/NavbarCollapse.js';
import Nav from 'react-bootstrap/es/Nav.js';
import {YMInitializer} from 'react-yandex-metrika';
import Social from './social';
import Copyright from './copyright';

export default () => {
    return (
        <Navbar className="footer">
            <YMInitializer accounts={[25179773]}/>
            <NavbarCollapse>
                <Nav pullRight>
                    <Copyright/>
                </Nav>
                <Social url="http://gotey.ru" title="Gotey"/>
            </NavbarCollapse>
        </Navbar>
    );
};
