import React from 'react';
import ImportantEducation from '../ImportantEducation/ImportantEducation';
import StudentsGoals from '../StudentsGoals/StudentsGoals';
import StudentTestimonial from '../StudentTestimonial/StudentTestimonial';

const Home = () => {
    return (
        <div>
            <ImportantEducation></ImportantEducation>
            <StudentsGoals></StudentsGoals>
            <StudentTestimonial></StudentTestimonial>
        </div>
    );
};

export default Home;