import React, { useEffect, useState } from 'react';
import Goal from '../Goal/Goal';
import './StudentGoals.css';

const StudentsGoals = () => {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/students-goals')
            .then(res => res.json())
            .then(data => setGoals(data.result));
    }, []);

    return (
        <div className='container'>
            <h2 className='mt-5 pt-5 text-center'><span className="text-warning">Student</span> Goals</h2>
            <div className="row d-flex justify-content-center">
                {
                    goals.map(goal => <Goal
                        key={goal._id}
                        goal={goal}
                    ></Goal>)
                }
            </div>
        </div>

    );
};

export default StudentsGoals;