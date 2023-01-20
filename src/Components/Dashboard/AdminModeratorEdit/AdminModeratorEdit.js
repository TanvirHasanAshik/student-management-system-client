import React from 'react';
import SideNav from '../SideNav/SideNav';

const AdminModeratorEdit = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-1">
                    <SideNav></SideNav>
                </div>
                <div className="col-md-11 col-sm-12 col-12 bg-secondary-subtle">
                    <h2 className=" text-center mt-5">Update Admin and Moderators</h2>
                </div>
            </div>

        </div>
    );
};

export default AdminModeratorEdit;