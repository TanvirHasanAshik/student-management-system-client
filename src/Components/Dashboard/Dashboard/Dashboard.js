import React from 'react';
import SideNav from '../../Dashboard/SideNav/SideNav';
const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-1">
                    <SideNav></SideNav>
                </div>
                <div className="col-md-11 col-10 bg-secondary-subtle">
                    <p className="fs-5 text-center mt-2">Dashboard</p>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;