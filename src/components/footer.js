import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {YMInitializer} from 'react-yandex-metrika';
import Social from './social';
import Copyright from './copyright';

export default () => {
    return (
        <Navbar className="footer">
            <YMInitializer accounts={[25179773]}/>
            <Navbar.Collapse>
                <Nav pullRight>
                    <Copyright/>
                </Nav>
                <Social url="http://gotey.ru" title="Gotey"/>
            </Navbar.Collapse>
        </Navbar>
    );
};
