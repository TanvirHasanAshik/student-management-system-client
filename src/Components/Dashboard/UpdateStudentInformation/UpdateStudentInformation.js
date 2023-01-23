import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SideNav from '../../Dashboard/SideNav/SideNav';

const UpdateStudentInformation = () => {
    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [students, setStudents] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/allStudent`)
            .then(res => res.json())
            .then(data => {
                const student = data?.result.find(student => student._id === id);
                setStudents(student);
            });
    }, [id]);

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
        const studentName = e.target.studentName.value || students.studentName;
        const fathersName = e.target.fathersName.value || students.fathersName;
        const mothersName = e.target.mothersName.value || students.mothersName;
        const email = e.target.email.value || students.email;
        const dateOfBirth = e.target.dateOfBirth.value || students.dateOfBirth;
        const studentAddress = e.target.address.value || students.studentAddress;
        const className = e.target.class.value || students.class;
        const studentId = e.target.studentId.value.toLowerCase() || students.studentId;

        const studentInfo = { studentName, fathersName, mothersName, email, dateOfBirth, studentAddress, className, studentId };

        if (file === null) {
            setErrorMessage("Please Upload an image")
            return;
        } else if (studentInfo.studentId === students.studentId.toLowerCase()) {

            setErrorMessage(`This ${studentInfo.studentId}have already exist. Please try another correct student id.`);
            return;
        }
        else {
            formData.append('file', file);
            formData.append('studentInfo', JSON.stringify(studentInfo));

            console.log(studentInfo);

            fetch('http://localhost:5000/updateStudentInformation', {
                method: 'PUT',
                body: formData
            })
                .then(res => res.json())
                .then(data => console.log(data.result));
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
                    <h2 className="text-center mt-5 mb-3">Update Student Information</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Student Full Name</label>
                                    <input name="studentName" type="text" className="form-control" placeholder={students.studentName} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Fathers Name</label>
                                    <input name="fathersName" type="text" className="form-control" placeholder={students.fathersName} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Mothers Name</label>
                                    <input name="mothersName" type="text" className="form-control" placeholder={students.mothersName} />
                                </div>
                                <div className="row g-2">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Student Email</label>
                                            <input name="email" type="email" className="form-control" placeholder={students.email} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Student Id</label>
                                            <input name="studentId" type="text" className="form-control" placeholder={students.studentId} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-2">
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Upload Image</label>
                                            <input onChange={handleChange} name="profileImg" type="file" className="form-control" />
                                            {!errorMessage ? <span className="text-success">*It should be 300 KB</span>
                                                : <span className="text-danger">{errorMessage}</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Date of Birth</label>
                                            <input name="dateOfBirth" type="date" className="form-control" placeholder={students.dateOfBirth} />
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
                                    <textarea className="form-control" name="address" id="" cols="30" rows="10" placeholder={students.address}></textarea>
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

export default UpdateStudentInformation;