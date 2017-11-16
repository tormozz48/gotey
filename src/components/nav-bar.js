import React, {Component} from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';

import meta from '../../data/meta';

export default class NavBar extends Component {
    render() {
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">{meta.title}</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}
