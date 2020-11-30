import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
const baseUrl = "http://localhost:5000";

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

  componentDidMount() {
    const userId = this.props.match.params.id;
    const url = baseUrl + "/user/" + "/get/" + userId;
    axios
      .get(url) //http get request
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
          <label htmlFor="inputUserName">User Name</label>
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
            <label htmlFor="inputFirstName">First Name </label>
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
            <label htmlFor="inputLastName">Last Name</label>
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
            <label htmlFor="inputDate">Birth Date</label>
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
            <label htmlFor="inputEmail">E mail</label>
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
            <label htmlFor="inputImageUrl">Image Url</label>
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
          onClick={() => this.sendUpdate()}
        >
          Update
        </button>
      </div>
    );
  }

  sendUpdate() {
    const userId = this.props.match.params.id;
    const baseUrl = "http://localhost:5000/user/update/" + userId;
    const datapost = {
      userName: this.state.userName,
      mail: this.state.userEmail,
      firstName: this.state.userFirstName,
      lastName: this.state.userLastName,
      birthDate: this.state.userBirthDate,
      description: this.state.userDescription,
      imgUrl: this.state.userImageUrl,
    };

    axios
      .put(baseUrl, datapost)
      .then((res) => {
        if (res.status == 201) {
          console.log("basarili dönüs");
          // ekrana başarıyla kayıt oldunuz tarzı birşey yazdır.
        } else {
          console.log("basarisiz dönüs");
          // hata ver lütfen bilgilerini kontrol ediniz.
        }
      })
      .catch((error) => {
        alert("Error 325 ");
      });
  }
}

export default EditComponent;
