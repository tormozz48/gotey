'use strict';

import React from 'react';
import {Panel} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export default (props) => {
    const {title, items} = props.product;
    const header = <h3>{title}</h3>;

    return (
        <div>
            <Panel header={header}>
                <BootstrapTable data={items} striped hover>
                    <TableHeaderColumn
                        isKey dataField='name'
                        dataSort={true}
                        filter={{type: 'TextFilter', delay: 500}}
                    >
                        Наименование
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField='type'
                        dataSort={true}
                        filter={{type: 'TextFilter', delay: 500}}
                    >
                        Тип сырья
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField='amount'
                        dataSort={true}
                        filter={{type: 'NumberFilter', delay: 500, numberComparators: ['=', '>', '<=']}}
                    >
                        Количество в упаковке
                    </TableHeaderColumn>
                </BootstrapTable>
            </Panel>
        </div>
    );
};

