import React from "react";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const App = () => {
  const contacts = [
    {
      id: 1,
      name: "joel",
      email: "joel4me@gmail.com",
      number: "08101656978",
    },
    {
      id: 2,
      name: "sam",
      email: "sam1965@gmail.com",
      number: "08045356978",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
