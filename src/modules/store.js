'use strict';

import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';

import main from '../../data/main';
import menu from '../../data/menu.json';

//products
import cashTape from '../../data/cash-tape.json';
import checkTape from '../../data/check-tape.json';
import faxPaper from '../../data/fax-paper.json';
import lpuPaper from '../../data/paper-lpu.json';
import rollPaper from '../../data/roll-paper.json';
import officePaper from '../../data/office-paper.json';
import plotterRolls from '../../data/plotter-rolls.json';
import propilenTape from '../../data/propilen-tape.json';
import stretchFilmFood from '../../data/stretch-film-food.json';
import termFilm from '../../data/term-film.json';
import termoLabel from '../../data/termo-label';

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
}

function getInitialState() {
    return {
        main,
        menu,
        products: {
            cashTape,
            checkTape,
            faxPaper,
            officePaper,
            lpuPaper,
            plotterRolls,
            propilenTape,
            rollPaper,
            stretchFilmFood,
            termFilm,
            termoLabel
        }
    };
}

function reducer(state = getInitialState(), action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default compose(applyMiddleware(...middlewares))(createStore)(reducer);
