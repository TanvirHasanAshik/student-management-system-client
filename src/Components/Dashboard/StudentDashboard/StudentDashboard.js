import { faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ThreeCircles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SideNav from '../../Dashboard/SideNav/SideNav';

const StudentDashboard = () => {
    const [students, setStudents] = useState([]);
    const [studentId, setStudentId] = useState('');
    const [className, setClassName] = useState('');
    const [selectRow, setSelectRow] = useState(20);
    const navigate = useNavigate();
    const loader = <ThreeCircles
        textAlign="center"
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
    />
    const sliceStudents = students.slice(0, selectRow);

    useEffect(() => {
        fetch(`http://localhost:5000/allStudent?id=${studentId}&className=${className}`)
            .then(res => res.json())
            .then(data => {
                setStudents(data.result);
            })
    }, [studentId, className]);

    const handleClick = e => {
        setSelectRow(e.target.value);
    }

    const handleIdChange = e => {
        const studentId = e.target.value;
        setStudentId(studentId);
    }
    const handleClassChange = e => {
        setClassName(e.target.value);
    }

    const handleDelete = id => {
        fetch(`http://localhost:5000/deleteStudent/${id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {
                if (data.result?.deletedCount > 0) {
                    const filtered = students.filter(student => student._id !== id);
                    setStudents(filtered);
                    toast.success('Student info deleted successfully', {
                        theme: "dark"
                    })
                }
            })

    }
    const handleUpdate = id => {
        navigate(`/updateStudentInformation/${id}`);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-1">
                    <SideNav></SideNav>
                </div>
                <div className="col-md-11 col-sm-12 col-12 bg-secondary-subtle overflow-auto">
                    <p className="fs-5 text-center mt-2">Student Dashboard</p>
                    <div className="row">
                        <div className="col-md-1">
                            <div class="mb-3">
                                <select onClick={handleClick} class=" form-select" name="totalRow" id="">
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="50">50</option>
                                    <option value={students.length}>All</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="Search Student By Student Id."
                                    onChange={handleIdChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="mb-3">
                                <select onChange={handleClassChange} name='class' className="form-select">
                                    <option value="">Select Class</option>
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
                    </div>
                    <table class="table table-bordered text-center mt-3">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Student Name</th>
                                <th scope="col">Fathers Name</th>
                                <th scope="col">Mothers Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Class</th>
                                <th scope="col">Student Id</th>
                                <th scope="col">Date of birth</th>
                                <th scope="col">Student Address</th>
                                <th scope="col">Admin Action</th>
                            </tr>
                            {students.length === 0 ? <div>
                                <span>No data found now.....{loader}</span>
                            </div>
                                :
                                sliceStudents.map(student => {
                                    return <tr>
                                        <td>
                                            <LazyLoadImage className="w-25" src={`data:${student.image.contentType};base64,${student.image?.img}`}></LazyLoadImage>
                                        </td>
                                        <td>{student.studentName}</td>
                                        <td>{student.fathersName}</td>
                                        <td>{student.mothersName}</td>
                                        <td>{student.email}</td>
                                        <td>{student.className}</td>
                                        <td>{student.studentId}</td>
                                        <td>{student.dateOfBirth}</td>
                                        <td>{student.studentAddress}</td>
                                        <td>
                                            <button onClick={() => handleUpdate(student._id)} className="btn btn-success m-2">
                                                <FontAwesomeIcon icon={faUserEdit} />
                                            </button>
                                            <button onClick={() => handleDelete(student._id)} className="btn btn-danger">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                })
                            }

                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>

        </div >
    );
};

export default StudentDashboard;