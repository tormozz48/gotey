import React from 'react';
import {Panel, Glyphicon} from 'react-bootstrap';

export default (props) => {
    const {params} = props;
    const header = <h3>{params.title}</h3>;

    return (
        <div>
            <Panel header={header}>
                <span><Glyphicon glyph={params.icon}/></span>
                <span> {params.body}</span>
            </Panel>
        </div>
    );
};

