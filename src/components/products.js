'use strict';

import React from 'react';
import ProductTable from './product-table';

export default (props) => {
    const products = props.products;

    return (
        <div>
            <ProductTable product={products.cashTape} columns={['name', 'type', 'amount']}/>
            <ProductTable product={products.termoLabel} columns={['name', 'type', 'amount']}/>
            <ProductTable product={products.stretchFilmFood} columns={['typeSize', 'winding']}/>
            <ProductTable product={products.termFilm} columns={['typeSize', 'winding']}/>
        </div>
    );
};
