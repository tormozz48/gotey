import React from 'react';
import {Glyphicon} from 'react-bootstrap';

export default (props) => {
    function drawContacts(contacts) {
        return contacts.map((contact) => (
            <div key={contact.value}>
                <span className="contact__icon"><Glyphicon glyph={contact.icon}/></span>
                <span className="contact__value">{contact.value}</span>
            </div>
        ));
    }

    console.log(props.contacts);

    return (<div>{drawContacts(props.contacts.items)}</div>);
};
