import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Navigation.scss";
import logo from "../assets/images/logo.png";

import Context from "../context";
import Signin from "./Auth/Signin";

export default function Navigation(props) {
    const context = useContext(Context);
    const { dispatch } = useContext(Context);
    const onSignOut = () => {
        dispatch({
            type: "SIGNOUT_USER",
            payload: {
                isAuth: false,
                currentUser: null
            }
        });
    };

    return (
        <div className="">
            <nav className="navigation navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="logo" src={logo} alt="logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mr-auto">
                            {context.state.isAuth ? (
                                <a
                                    className="nav-link"
                                    href="#test"
                                    onClick={e => e.preventDefault()}
                                >
                                    Logged in as:{" "}
                                    <span className="logged-as-name">
                                        {context.state.currentUser}
                                    </span>
                                </a>
                            ) : null}
                            <li className="nav-item active">
                                <Link className="nav-link" to="/all-posts">
                                    Posty{" "}
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    O nas
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Opcje
                                </Link>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <Link className="dropdown-item" to="/">
                                        Action
                                    </Link>
                                    {context.state.isAuth ? (
                                        <Link to="/panel">Panel</Link>
                                    ) : null}
                                    <div className="dropdown-divider" />
                                    <Link
                                        className="dropdown-item"
                                        to="/"
                                        data-toggle="modal"
                                        data-target="#loginModal"
                                        onClick={e => e.preventDefault()}
                                    >
                                        Zaloguj
                                    </Link>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
                <Signin />
            </nav>
        </div>
    );
}
