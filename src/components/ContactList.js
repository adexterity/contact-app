import React from "react";

const ContactList = ({ contacts }) => {
  const renderContactList = contacts.map((contact) => {
    return (
      <div>
        <p>name: {contact.name}</p>
        <p>email: {contact.email}</p>
        <p>phone number: {contact.number}</p>
      </div>
    );
  });
  return (
    <div className="ui celled list">
      <h2>Contact List</h2>
      {renderContactList}
    </div>
  );
};

export default ContactList;
