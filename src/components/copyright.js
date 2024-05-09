import React from 'react';
import Glyphicon from 'react-bootstrap/es/Glyphicon.js';

export default () => {
  const year = new Date().getFullYear();
  return (
    <div className="copyright">
      <a className="copyright__author" href="mailto:andrey.kuznetsov48@yandex.ru">
        Andrey Kuznetsov
      </a>
      <Glyphicon glyph="copyright-mark"/>
      <span className="copyright__year">{year}</span>
    </div>
  );
};
