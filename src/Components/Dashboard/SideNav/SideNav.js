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
                    <ul className="navbar-nav side-nav ms-2 ps-2 ">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/studentGoals">Add Student Goals</Link>
                        </li>

                        {/* Admin and Moderators section */}
                        <li className="nav-item">
                            <div className="dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admin and Moderator
                                </Link>
                                <ul className="dropdown-menu side-nav-dropdown m-0 text-center" style={{ width: '200px', padding: '0px', borderRadius: '0' }}>
                                    <li><Link className="nav-link" to="/addAdminModerator">Add Admin / Moderator </Link></li>
                                    <li><Link className="nav-link" to="/showAdminModerator">Show Admin - Moderator</Link></li>
                                </ul>
                            </div>
                        </li>
                        {/* ---------------------------- */}

                        {/* Student's Curriculum */}
                        <li className="nav-item">
                            <div className="dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Student Curriculum
                                </Link>
                                <ul className="dropdown-menu side-nav-dropdown m-0" style={{ width: '200px', padding: '0px', borderRadius: '0' }}>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/addDailyClassWork">Add Daily Classes Work</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/assignHomeWork">Assign Home Work</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/updateCompleteLesson">Update Complete Lesson
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        {/* ---------------------------- */}

                        <li className="nav-item">
                            <Link className="nav-link" to="/addStudent">Add Student</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/studentDashboard">Student Dashboard</Link>
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