'use strict';

import React from 'react';
import Panel from 'react-bootstrap/es/Panel.js';
import BootstrapTable from 'react-bootstrap-table/lib/BootstrapTable.js';
import TableHeaderColumn from 'react-bootstrap-table/lib/TableHeaderColumn.js';

import pick from 'lodash-es/pick';
import values from 'lodash-es/values';

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
    winding: windingColumn,
  };

  return (columns = []) => {
    const neededColumns = values(pick(columnsMap, columns));
    return neededColumns.map((v) => v());
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

