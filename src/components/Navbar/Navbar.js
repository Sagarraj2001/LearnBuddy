import React from 'react'
import { Link } from "react-router-dom";



export default function Navbar() {
    return (
        <>
            <div style={{ position: "sticky", top: "0", zIndex: "1", left: "0", width: "100%", backgroundColor: "#222" }}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                    <div className="container-fluid" >
                        <h3><Link className="navbar-brand" to="/" style={{ color: "orange" }}>LearnBuddy</Link></h3>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="course">Course</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="price">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="contact">Contact Us</Link>
                                </li>

                            </ul>
                            <form className="d-flex" role="search">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="signup">Signup</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="login">Login</Link>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}
