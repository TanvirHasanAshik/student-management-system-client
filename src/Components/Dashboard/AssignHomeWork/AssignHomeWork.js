import React from 'react';
import { toast } from 'react-toastify';
import SideNav from '../SideNav/SideNav';

const AssignHomeWork = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const className = e.target.className.value;
        const subject = e.target.subject.value;
        const topic = e.target.topic.value;
        const chapter = e.target.chapter.value;
        const submissionDate = e.target.submissionDate.value;
        const teacherName = e.target.teacherName.value;
        const description = e.target.description.value;

        const homeWorkData = { className, subject, topic, description, submissionDate, teacherName, chapter }

        fetch('http://localhost:5000/assignHomeWork', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(homeWorkData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.homeWorkData.insertedId) {
                    toast.success("Home Work Data inserted successfully", {
                        theme: "dark",
                    })
                }
            })


        e.target.reset();
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-1">
                    <SideNav></SideNav>
                </div>
                <div className="col-md-11 col-sm-12 col-12 bg-secondary-subtle">
                    <h2 className='text-center mt-5 mb-3'>Assign Home Work</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row g-2 justify-content-center">
                            <div className="mb-3 col-md-5">
                                <label for="validationCustom04" className="form-label">Select Class</label>
                                <select name='className' className="form-select" id="validationCustom04" required>
                                    <option selected disabled>Select Class</option>
                                    <option value="Class-i">Class-i</option>
                                    <option value="Class-ii">Class-ii</option>
                                    <option value="Class-iii">Class-iii</option>
                                    <option value="Class-iv">Class-iv</option>
                                    <option value="Class-v">Class-v</option>
                                    <option value="Class-vi">Class-vi</option>
                                    <option value="Class-vii">Class-vii</option>
                                    <option value="Class-viii">Class-viii</option>
                                    <option value="Class-ix">Class-ix</option>
                                    <option value="1Class-x">Class-x</option>
                                </select>
                            </div>
                            <div className="mb-3 col-md-5">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Subject Name
                                </label>
                                <input required name="subject" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Subject Name" />
                            </div>
                        </div>
                        <div className="row g-2 justify-content-center">
                            <div className="mb-3 col-md-5">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Subject Topic
                                </label>
                                <input required name="topic" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Subject Topic" />
                            </div>
                            <div className="mb-3 col-md-5">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Chapter
                                </label>
                                <input required name="chapter" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Chapter" />
                            </div>
                        </div>
                        <div className="row g-2 justify-content-center">
                            <div className="mb-3 col-md-5">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Submission Date
                                </label>
                                <input required name="submissionDate" type="date" className="form-control" id="exampleFormControlInput1" placeholder="Enter Chapter" />
                            </div>
                            <div className="mb-3 col-md-5">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Course Teacher Name
                                </label>
                                <input required name="teacherName" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Course Teacher Name" />
                            </div>
                        </div>
                        <div className="row g-2 justify-content-center">
                            <div className="mb-3 col-md-10">
                                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                                <textarea name="description" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="mb-3 col-md-10">
                                <input className='mt-3 btn btn-success' type="submit" value='submit' />
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default AssignHomeWork;