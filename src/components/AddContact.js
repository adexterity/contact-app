import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="name" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="name" placeholder="name" />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input type="number" name="name" placeholder="1234567890" />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
