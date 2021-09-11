import React from 'react';
import Glyphicon from 'react-bootstrap/es/Glyphicon.js';

export default (props) => {
  function drawContacts(contacts) {
    return contacts.map((contact) => (
      <div key={contact.value}>
        <span className="contact__icon"><Glyphicon glyph={contact.icon}/></span>
        <span className="contact__value">{contact.value}</span>
      </div>
    ));
  }

  return (
    <div>
      <h5 className="address">{props.address}</h5>
      {drawContacts(props.contacts.items)}
    </div>
  );
};
