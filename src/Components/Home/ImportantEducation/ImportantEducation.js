import React, { useEffect, useState } from 'react';
import importantImg from "../../../images/important-education/01.jpg";
const ImportantEducation = () => {

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <h1 className='text-center fw-bold m-5'>Why Education is Important?</h1>
                </div>
            </div>
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <img className='w-100 rounded' src={importantImg} alt="" />
                </div>
                <div className="col-md-6">
                    <p className="fs-4 text-muted">
                        Education helps you develop critical skills like decision-making, mental agility, problem-solving, and logical thinking. People face problems in their professional as well as personal lives. In such situations, their ability to make rational and informed decisions comes from how educated and self-aware they are.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default ImportantEducation;