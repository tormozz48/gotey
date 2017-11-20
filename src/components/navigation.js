'use strict';

import React from 'react';
import {Jumbotron, Image} from 'react-bootstrap';

export default (props) => {
    const menu = props.menu;

    function drawMenuItems(items) {
        return items.map((item) => {
            const imgSrc = `images/${item.target}.jpg`;
            return (
                <div key={item.target} className="menu-item">
                    <a href="#" title={item.alt}>
                        <Image src={imgSrc} thumbnail/>
                    </a>
                </div>
            );
        });
    }

    return (
        <Jumbotron>
            {drawMenuItems(menu)}
        </Jumbotron>
    );
};
