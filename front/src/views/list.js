import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";

import { Link } from "react-router-dom";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

class listComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [],
    };
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    axios
      .get("http://localhost:5000/user/getallusers")
      .then((res) => {
        const veri = JSON.parse(res.data); //sorgudan json dönen veriyi parse edip uygun formata getiriyoruz
        this.setState({ listUser: veri });
      })
      .catch((error) => {
        alert("Error server " + error);
      });
  }

  render() {
    return (
      <table className="table table-hover table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Birth Date</th>
            <th scope="col">Description</th>
            <th scope="col">Image Url</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>{this.loadFillData()}</tbody>
      </table>
    );
  }

  loadFillData() {
    return this.state.listUser.map((data) => {
      return (
        <tr>
          <td>
            <Link
              className="btn btn-outline-info"
              to={"/detail/" + data.userId}
            >
              Details
            </Link>
          </td>
          <td>{data.userName}</td>
          <td>{data.firstName}</td>
          <td>{data.lastName}</td>
          <td>{data.mail}</td>
          <td>{data.birthDate}</td>
          <td>{data.description}</td>
          <td>{data.imgUrl}</td>
          <td>
            <Link
              className="btn btn-outline-info"
              to={"/update/" + data.userId}
            >
              Edit
            </Link>
          </td>
          <td>
            <button
              className="btn btn-outline-danger"
              onClick={() => this.onDelete(data.userId)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  onDelete(id) {
    Swal.fire({
      title: "Emin misin?",
      text: "Bu dosyayı kurtaramayacaksınız!",
      type: "uyarı",
      showCancelButton: true,
      confirmButtonText: "Sil!",
      cancelButtonText: "Silme",
    }).then((result) => {
      if (result.value) {
        this.sendDelete(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("İptal edildi", "Dosya güvende :)", "error");
      }
    });
  }

  sendDelete(userId) {
    axios
      .post("http://localhost:5000/user/delete", {
        id: userId,
      })
      .then((response) => {
        Swal.fire("Silindi!", "Kullanıcı Silindi.", "basarili");
        this.loadUser();
      })
      .catch((error) => {
        alert("Error");
      });
  }
}

export default listComponent;
