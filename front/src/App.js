import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from "./views/form";
import List from "./views/list";
import Edit from "./views/edit";
import Detail from "./views/detail";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            className="navbar-brand"
            href="https://www.alotech.com.tr/"
            style={{ color: "red", fontWeight: "bold" }}
          >
            AloTech
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  {" "}
                  User List{" "}
                </Link>
              </li>
            </ul>
            <Link className="btn btn-info " to="/form">
              Add User
            </Link>
          </div>
        </nav>

        <div className="container py-4">
          <div className="row">
            <Route path="/" exact component={List} />
            <Route path="/form" component={Form} />
            <Route path="/update/:id" component={Edit} />
            <Route path="/detail/:id" component={Detail} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
