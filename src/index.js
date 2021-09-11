'use strict';

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './modules/store';
import Application from './components/application';

ReactDOM.render(
    <Provider store={store}>
      <Application/>
    </Provider>
    , document.getElementById('app'),
);
