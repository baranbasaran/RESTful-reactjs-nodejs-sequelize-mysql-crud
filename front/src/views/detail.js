import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
const baseUrl = "http://localhost:5000";

class DetailComponent extends React.Component {
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
  componentDidMount() {
    const userId = this.props.match.params.id;
    const url = baseUrl + "/user" + "/get/" + userId;
    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        this.setState({
          userName: data.userName,
          userFirstName: data.firstName,
          userLastName: data.lastName,
          userEmail: data.mail,
          userBirthDate: data.birthDate,
          userDescription: data.description,
          userImageUrl: data.imgUrl,
        });
      })
      .catch((error) => {
        alert("Error server " + error);
      });
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
            disabled="disabled"
          />
        </div>
        <div className="form-row justify-content-center">
          <div className="form-group col-md-12">
            <b>
              <label htmlFor="inputFirstName">First Name </label>
            </b>
            <input
              type="text"
              className="form-control"
              value={this.state.userFirstName}
              disabled="disabled"
            />
          </div>
          <div className="form-group col-md-12">
            <b>
              <label htmlFor="inputLastName">Last Name</label>
            </b>
            <input
              type="text"
              className="form-control"
              value={this.state.userLastName}
              disabled="disabled"
            />
          </div>

          <div className="form-group col-md-12">
            <b>
              <label htmlFor="inputDate">Birth Date</label>
            </b>
            <input
              type="date"
              className="form-control"
              value={this.state.userBirthDate}
              disabled="disabled"
            />
          </div>
          <div className="form-group col-md-12">
            <b>
              <label htmlFor="inputEmail">Mail Adress</label>
            </b>
            <input
              type="email"
              className="form-control"
              value={this.state.userEmail}
              disabled="disabled"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <b>
              <label htmlFor="inputDescription">Description</label>
            </b>
            <input
              type="text"
              className="form-control"
              id="inputDescription"
              value={this.state.userDescription}
              disabled="disabled"
            />
          </div>
          <div className="form-group col-md-12">
            <b>
              <label htmlFor="inputImageUrl">Image Url</label>
            </b>
            <input
              type="url"
              className="form-control"
              id="inputImageUrl"
              value={this.state.userImageUrl}
              disabled="disabled"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default DetailComponent;
