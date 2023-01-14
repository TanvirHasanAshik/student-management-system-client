import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router-dom';
import './StudentGoalDetails.css';
import graduationImg from '../../images/student-goals/graduation.jpg';

const StudentGoalDetails = () => {
    const { id } = useParams();
    const [goals, setGoals] = useState([]);
    const [goalTypes, setGoalTypes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/students-goals')
            .then(res => res.json())
            .then(data => setGoals(data.result));
    }, []);
    const goalsData = goals?.find(goal => goal._id === id);

    useEffect(() => {
        if (goalsData?.goalType) {
            setGoalTypes(JSON.parse(goalsData.goalType));
        }
    }, [goalsData?.goalType]);
    return (
        <div className='container mt-5 pt-5'>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <h3>{goalsData?.goalName}</h3>
                    <p className='mt-3'>{goalsData?.description}</p>
                    <ul className='ms-3 mt-2 goalData border-start'>
                        {
                            goalTypes.map(type => <div className='d-flex align-items-center'>
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <li className='ms-2'>{type.goalType}</li></div>)
                        }
                    </ul>
                </div>
                <div className="col-md-6">
                    <LazyLoadImage className='w-100 mt-5 pt-2' src={graduationImg} />
                </div>
            </div>
        </div>
    );
};

export default StudentGoalDetails;
