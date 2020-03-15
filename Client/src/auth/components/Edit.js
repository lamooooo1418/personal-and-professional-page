import React, { Component } from "react";
class Edit extends Component {
  constructor() {
    super();
    this.state = {
      FirstName: this.props.firstName,
      lName: this.props.lastName,
      Email: this.props.email
    };
  }
  editUser = event => {
    event.preventDefault();
    const User = {
      First: this.props.firstName,
      lName: this.props.lastName,

      Email: this.props.email
    };
    this.close();
  };
  handleChangeBox = event => {
    const input = event.target;

    if (input.className === "FirstName") {
      this.setState({
        FirstName: input.value
      });
    } else if (input.className === "lastName") {
      this.setState({
        lName: input.value
      });
    } else {
      this.setState({
        Email: input.value
      });
    }
    this.props.editUser(this.props.id, user);
  };

  close = () => {
    this.props.close();
  };

  render() {
    return (
      <div>
        <h4>Edit User</h4>
        <label> Name: </label>
        <input
          className="FirstName"
          onChange={this.handleChangeBox}
          value={this.state.FirstName}
        />
        <label>Last Name:</label>
        <input
          className="lastName"
          onChange={this.handleChangeBox}
          value={this.state.lastName}
        />
        <label>Email:</label>
        <br />
        <input
          className="Email"
          onChange={this.handleChangeBox}
          value={this.state.Email}
        />
        <button style={{ display: "inline" }} onClick={this.close}>
          Cancel
        </button>
        <button onClick={this.editUser}>Confirm</button>
      </div>
    );
  }
}
export default Edit;
