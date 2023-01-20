import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.config.init';
import "./Header.css";
const Header = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const [user] = useAuthState(auth);
    return (
        <nav className=" navbar bg-primary navbar-expand-lg bg-white p-4">
            <div className="container">
                <Link className="navbar-brand" to="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        {/* admission nav */}
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Admission
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/admission-inquiry">Admission inquiry</Link></li>
                                <li><Link className="dropdown-item" to="/admission-form">Admission Form</Link></li>
                                <li><Link className="dropdown-item" to="/admission-confirmation">Admission Confirmation</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Academic
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/daily-classwork">daily classwork</Link></li>
                                <li> <li><hr className="dropdown-divider" /></li><Link className="dropdown-item" to="/assign-homework">Assign homework</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/update-completed-lesson">Update completed lesson</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/result">Academic Result</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            {!user && <Link className="nav-link" to="/register">Register</Link>}
                        </li>
                        <li className="nav-item">
                            {user ? <button className="btn btn-secondary" onClick={() => signOut()}>Log Out</button>
                                : <Link className="nav-link" to="/login">Login</Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;