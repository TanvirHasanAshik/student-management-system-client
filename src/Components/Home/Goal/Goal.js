import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import './Goal.css';
const Goal = ({ goal }) => {
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/student/goal/details/${goal._id}`);
    }
    return (
        <div onClick={handleDetails} className='goal col-md-3 col-sm-6 col-12 border text-center  m-2 p-3'>
            <LazyLoadImage className='w-25' src={`data:image/png;base64,${goal.image?.img}`} alt="" />
            <p className='fs-5'>{goal.goalName}</p>
        </div>
    );
};

export default Goal;