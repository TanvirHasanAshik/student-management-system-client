import { faBars, faClose, faXmark, faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

const Sidenav = () => {
    return (
        <div className='ms-5 fixed-nav'>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                <FontAwesomeIcon icon={faBars} />
            </button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">FITCHER</h5>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="offcanvas" aria-label="Close">
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav side-nav ms-2 ps-2">
                        <li className="nav-item">
                            <Link className="nav-link" to="/studentGoals">Add Student Goals</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addDailyClassWork">Add Daily Classes Work</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Something else here</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Something else here</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Something else here</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Something else here</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;