import moment from 'moment/moment';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import SideNav from '../SideNav/SideNav';

const AddDailyClassWork = () => {
    const [files, setFiles] = useState(null);

    const handleChange = e => {
        setFiles(e.target.files[0]);
    }
    const handleSubmit = e => {
        e.preventDefault();
        const className = e.target.class.value;
        const chapter = e.target.chapter.value;
        const subject = e.target.subject.value;
        const topic = e.target.topic.value;
        const description = e.target.description.value;
        const formData = new FormData();
        const date = moment().format("MMM Do YYYY");

        formData.append('file', files);
        formData.append('subject', subject);
        formData.append('topic', topic);
        formData.append('description', description);
        formData.append('className', className);
        formData.append('chapter', chapter);
        formData.append('date', date);

        fetch('http://localhost:5000/dailyClassWork', {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.insertedId) {
                    toast.success('Daily class work inserted successfully', {
                        theme: 'dark'
                    })
                }
            });

        e.target.reset();
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-1 col-sm-12">
                    <SideNav></SideNav>
                </div>
                <div className="col-md-11 col-sm-12 col-12 bg-secondary-subtle">
                    <p className="fs-5 text-center mt-2">Add Daily Class Work</p>
                    <form onSubmit={handleSubmit} className="m-5">
                        <div className="row g-2 d-flex justify-content-center">
                            <div className="col-md-4">
                                <label htmlFor="validationCustom04" className="form-label">Select Class</label>
                                <select name='class' className="form-select" id="validationCustom04" required>
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
                                    <option value="Class-x">Class-x</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="formFile" className="form-label">Upload Book Image</label>
                                <input required onChange={handleChange} className="form-control" type="file" id="formFile" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="chapter" className="form-label">Chapter</label>
                                <input required name="chapter" className="form-control" type="text" id="chapter" placeholder='Book Chapter' />
                            </div>
                        </div>
                        <div className="row g-2 mt-2 d-flex justify-content-center">
                            <div className="col-md-6">
                                <label htmlFor="formFile" className="form-label">Subject</label>
                                <input required name="subject" className="form-control" type="text" id="formFile" placeholder='Subject' />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="formFile" className="form-label">Subject Topic</label>
                                <input required name="topic" className="form-control" type="text" id="formFile" placeholder='Subject Topic' />
                            </div>
                        </div>
                        <div className="row g-2 mt-2 d-flex justify-content-center">
                            <div className="col-md-12">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                                <textarea name="description" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <input className='mt-3 btn btn-success' type="submit" value='submit' />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddDailyClassWork;