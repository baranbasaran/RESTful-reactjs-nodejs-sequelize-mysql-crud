import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import axios from "axios";

class EditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userFirstName: "",
      userLastName: "",
      userBirthDate: "",
      userDescription: "",
      userImageUrl: "",
    };
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <b>
            <label htmlFor="inputUserName">User Name</label>
          </b>
          <input
            type="text"
            className="form-control"
            id="inputUserName"
            value={this.state.userName}
            onChange={(value) =>
              this.setState({ userName: value.target.value })
            }
          />
        </div>
        <div className="form-row justify-content-center">
          <div className="form-group col-md-6">
            <b>
              <label htmlFor="inputFirstName">First Name </label>
            </b>
            <input
              type="text"
              className="form-control"
              value={this.state.userFirstName}
              onChange={(value) =>
                this.setState({ userFirstName: value.target.value })
              }
            />
          </div>
          <div className="form-group col-md-6">
            <b>
              <label htmlFor="inputLastName">Last Name</label>
            </b>
            <input
              type="text"
              className="form-control"
              value={this.state.userLastName}
              onChange={(value) =>
                this.setState({ userLastName: value.target.value })
              }
            />
          </div>

          <div className="form-group col-md-6">
            <b>
              <label htmlFor="inputDate">Birth Date</label>
            </b>
            <input
              type="date"
              className="form-control"
              value={this.state.userBirthDate}
              onChange={(value) =>
                this.setState({ userBirthDate: value.target.value })
              }
            />
          </div>
          <div className="form-group col-md-6">
            <b>
              <label htmlFor="inputEmail">Mail Adress</label>
            </b>
            <input
              type="email"
              className="form-control"
              value={this.state.userEmail}
              onChange={(value) =>
                this.setState({ userEmail: value.target.value })
              }
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <b>
              <label htmlFor="inputDescription">Description</label>
            </b>
            <input
              type="text"
              className="form-control"
              id="inputDescription"
              value={this.state.userDescription}
              onChange={(value) =>
                this.setState({ userDescription: value.target.value })
              }
            />
          </div>
          <div className="form-group col-md-6">
            <b>
              <label htmlFor="inputImageUrl">Image Url</label>
            </b>
            <input
              type="url"
              className="form-control"
              id="inputImageUrl"
              value={this.state.userImageUrl}
              onChange={(value) =>
                this.setState({ userImageUrl: value.target.value })
              }
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => this.sendSave()}
        >
          Save
        </button>
      </div>
    );
  }

  sendSave() {
    const datapost = {
      userName: this.state.userName,
      mail: this.state.userEmail,
      firstName: this.state.userFirstName,
      lastName: this.state.userLastName,
      birthDate: this.state.userBirthDate,
      description: this.state.userDescription,
      imgUrl: this.state.userImageUrl,
    };
    console.log(datapost);

    axios
      .post("http://localhost:5000/user/create", datapost)
      .then((res) => {
        if (res.status == 201) {
          console.log("basarili dönüs");
        }
      })
      .catch((error) => {
        alert("Error 34 " + error);
      });
  }
}

export default EditComponent;
