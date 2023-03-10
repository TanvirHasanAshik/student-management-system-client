import React, { useState } from 'react';
import { toast } from 'react-toastify';
import SideNav from '../SideNav/SideNav';

const AddStudentInformation = () => {
    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = e => {
        const profileImg = e.target.files[0];
        if (profileImg.size / 1024 <= 300) {
            setFile(profileImg);
            setErrorMessage('');
        }
        else {
            setErrorMessage('Image size is larger. It should be max 300 KB');
            setFile(null);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        const studentName = e.target.studentName.value;
        const fathersName = e.target.fathersName.value;
        const mothersName = e.target.mothersName.value;
        const email = e.target.email.value;
        const dateOfBirth = e.target.dateOfBirth.value;
        const studentAddress = e.target.address.value;
        const className = e.target.class.value;
        const studentId = e.target.studentId.value.toLowerCase();

        const studentInfo = { studentName, fathersName, mothersName, email, dateOfBirth, studentAddress, className, studentId };

        if (file === null) {
            return;
        } else {
            formData.append('file', file);
            formData.append('studentInfo', JSON.stringify(studentInfo));

            fetch('http://localhost:5000/addStudent', {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (data.result.insertedId) {
                        toast.success('Student added successfully', {
                            theme: 'dark'
                        })
                    }
                });
        }


        e.target.reset();
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-1">
                    <SideNav></SideNav>
                </div>
                <div className="col-md-11 col-sm-12 col-12 bg-secondary-subtle">
                    <h2 className="text-center mt-5 mb-3">Add Student Information</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Student Full Name</label>
                                    <input required name="studentName" type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Fathers Name</label>
                                    <input required name="fathersName" type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Mothers Name</label>
                                    <input required name="mothersName" type="text" className="form-control" />
                                </div>
                                <div className="row g-2">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Student Email</label>
                                            <input required name="email" type="email" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Student Id</label>
                                            <input required name="studentId" type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-2">
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Upload Image</label>
                                            <input required onChange={handleChange} name="profileImg" type="file" className="form-control" />
                                            {!errorMessage ? <span className="text-success">*It should be 300 KB</span>
                                                : <span className="text-danger">{errorMessage}</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Date of Birth</label>
                                            <input required name="dateOfBirth" type="date" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label for="exampleInputEmail1" className="form-label">Select Class</label>
                                        <select name='class' className="form-select" id="validationCustom04" >
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
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Student Address</label>
                                    <textarea className="form-control" name="address" id="" cols="30" rows="10"></textarea>
                                </div>

                                <button type="submit" className="btn btn-success mb-5">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddStudentInformation;