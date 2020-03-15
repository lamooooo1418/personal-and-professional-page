import React, { Component } from "react";
class Edit extends Component {
  constructor() {
    super();
    this.state = {
      User: ""
    };
  }
  editfName = () => {
    let copyofInformation = this.state.information;
    var editText = prompt(
      "TO EDIT YOUR TEXT: ",
      copyofInformation[0].firstName
    );
    // if the user didnt click on cancel or didnt insert empty value
    if (editText !== null && editText !== "") {
      // take this text and put it in the name of this object in the copy array
      copyofInformation[0].firstName = editText;
      // change the trips that in the stete with the copy array
      this.setState({
        information: copyofInformation
      });
    }
  };
  editlName = () => {
    let copyofInformation = this.props.lastName;
    var editText = prompt("TO EDIT YOUR TEXT: ", copyofInformation[0].lastName);
    // if the user didnt click on cancel or didnt insert empty value
    if (editText !== null && editText !== "") {
      // take this text and put it in the name of this object in the copy array
      copyofInformation[0].lastName = editText;
      // change the trips that in the stete with the copy array
      this.setState({
        information: copyofInformation
      });
    }
  };
  editMail = index => {
    let copyofInformation = this.props.children;
    var editText = prompt(
      "TO EDIT YOUR TEXT: ",
      copyofInformation[index].email
    );
    // if the user didnt click on cancel or didnt insert empty value
    if (editText !== null && editText !== "") {
      // take this text and put it in the name of this object in the copy array
      copyofInformation[0].email = editText;
      // change the trips that in the stete with the copy array
      this.setState({
        information: copyofInformation
      });
    }
  };
  render() {
    return (
      <div>
        <br />
        <h3>Edit information</h3>
        <label htmlFor="name">firstName1</label>
        <div className="input-field">
          <input
            type="text"
            name="fname"
            value={this.state.information.firstName}
            onChange={this.handleChange}
          />
          <label htmlFor="name">firstName</label>
        </div>
        <div className="input-field">
          <input
            type="text"
            name="lName"
            value={this.state.information.lastName}
          />
          <label htmlFor="LastName">LastName</label>
        </div>
        <div className="input-field">
          <input
            type="text"
            name="address"
            value={this.state.information.email}
          />
          <label htmlFor="mail">Email</label>
        </div>
        <input type="submit" value="Save" className="btn" />
      </div>
    );
    // return (
    //   <div>
    //     <body className=“body'>
    //       <p>
    //         {' “}
    //         FirstName:{this.props.firstName}
    //         <button onClick={this.editfName}>Edit Name</button>
    //       </p>
    //       <p>
    //         editlName LastName: {this.props.lastName}
    //         <button onClick={this.editlName}>Edit 1Name</button>
    //       </p>
    //       <p>
    //         Email: {this.props.email}
    //         <button onClick={this.editlName}>Edit Msil</button>
    //       </p>
    //     </body>
    //   </div>
    // );
  }
}
export default Edit;
