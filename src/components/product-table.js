'use strict';

import React from 'react';
import {Panel} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import _ from 'lodash';

const configureColumns = (function() {
    const textColumn = (key, label, isKey = false) => {
        return (
            <TableHeaderColumn isKey={isKey} key={key} dataField={key} dataSort={true}
                filter={{type: 'TextFilter', delay: 500}}>
                {label}
            </TableHeaderColumn>
        );
    };

    const numberColumn = (key, label, isKey = false) => {
        return (
            <TableHeaderColumn isKey={isKey} key={key} dataField={key} dataSort={true}
                filter={{type: 'NumberFilter', delay: 500, numberComparators: ['=', '>', '<=']}}>
                {label}
            </TableHeaderColumn>
        );
    };

    const nameColumn = () => textColumn('name', 'Наименование', true);
    const typeColumn = () => textColumn('type', 'Тип сырья');
    const amountColumn = () => numberColumn('amount', 'Количество в упаковке');
    const typeSizeCoumn = () => numberColumn('type', 'Типоразмер ленты', true);
    const windingColumn = () => numberColumn('amount', 'Намотка (км.)');

    const columnsMap = {
        name: nameColumn,
        type: typeColumn,
        amount: amountColumn,
        typeSize: typeSizeCoumn,
        winding: windingColumn
    };

    return (columns = []) => {
        return _(columnsMap)
            .pick(columns)
            .values()
            .map((v) => v())
            .value();
    };
})();

export default (props) => {
    const {title, items, id} = props.product;
    const header = <h3>{title}</h3>;

    return (
        <div id={id}>
            <Panel header={header}>
                <BootstrapTable data={items} striped>
                    {configureColumns(props.columns)}
                </BootstrapTable>
            </Panel>
        </div>
    );
};

