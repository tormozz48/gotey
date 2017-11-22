import React from 'react';
import Glyphicon from 'react-bootstrap/es/Glyphicon.js';

export default () => {
    return (
        <div className="copyright">
            <a className="copyright__author" href="mailto:andrey.kuznetsov48@yandex.ua">
                Andrey Kuzetsov
            </a>
            <Glyphicon glyph="copyright-mark"/>
            <span className="copyright__year">2017</span>
        </div>
    );
};
