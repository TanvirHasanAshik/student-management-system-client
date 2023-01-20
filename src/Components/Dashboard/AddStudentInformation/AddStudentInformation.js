import React from 'react';
import SideNav from '../SideNav/SideNav';

const AddStudentInformation = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-1">
                    <SideNav></SideNav>
                </div>
                <div className="col-md-11 col-sm-12 col-12 bg-secondary-subtle">
                    <h2 className="text-center mt-5">Add Student Information</h2>
                </div>
            </div>

        </div>
    );
};

export default AddStudentInformation;