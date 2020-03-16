import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./App.css";

const App = ({ children, user }) => {
  return (
    <main className={`app ${!user ? "unauthorized" : ""}`}>
      <header className="app-header">
        <h1 className="app-title">
          <Link to="/">
            owlbooks <span> beta </span>{" "}
          </Link>{" "}
        </h1>{" "}
        {user && (
          <span className="user">
            <Link className="wrapper" to="/settings">
              <span
                className="picture"
                style={{ backgroundImage: `url(${user.picture})` }}
              />{" "}
              <span className="name"> {user.name} </span>{" "}
            </Link>{" "}
          </span>
        )}{" "}
      </header>{" "}
      <section className="content"> {children} </section> <footer />
    </main>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired,
  user: PropTypes.object
};

export default App;
