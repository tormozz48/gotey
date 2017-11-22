'use strict';

import React from 'react';
import Jumbotron from 'react-bootstrap/es/Jumbotron.js';
import Image from 'react-bootstrap/es/Image.js';
import Tooltip from 'react-bootstrap/es/Tooltip.js';
import OverlayTrigger from 'react-bootstrap/es/OverlayTrigger.js';
import Scroll from 'react-scroll';

const Link = Scroll.Link;

export default (props) => {
    const menu = props.menu;

    function drawMenuItems(items) {
        return items.map((item) => {
            const imgSrc = `images/${item.target}.jpg`;
            const tooltip = (<Tooltip id={item.target}>{item.alt}</Tooltip>);

            return (
                <OverlayTrigger key={item.target} placement="bottom" overlay={tooltip}>
                    <div className="menu-item">
                        <Link className="menu-item" to={item.target} smooth={true} duration={500}>
                            <Image src={imgSrc} thumbnail/>
                        </Link>
                    </div>
                </OverlayTrigger>
            );
        });
    }

    return (
        <Jumbotron>
            {drawMenuItems(menu)}
        </Jumbotron>
    );
};
