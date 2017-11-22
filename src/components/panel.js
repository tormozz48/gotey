import React from 'react';
import Panel from 'react-bootstrap/es/Panel.js';
import Glyphicon from 'react-bootstrap/es/Glyphicon.js';

export default (props) => {
    const {params} = props;
    const header = <h3>{params.title}</h3>;

    return (
        <div>
            <Panel header={header}>
                <span><Glyphicon glyph={params.icon}/></span>
                <span>{params.body}</span>
            </Panel>
        </div>
    );
};

