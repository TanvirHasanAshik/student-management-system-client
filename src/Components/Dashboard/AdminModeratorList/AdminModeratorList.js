import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import SideNav from '../SideNav/SideNav';

const AdminModeratorList = () => {
    const [editors, setEditors] = useState([]);
    const [selectRowCount, setSelectRowCount] = useState(5);
    const Navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/adminAndModerators')
            .then(res => res.json())
            .then(data => setEditors(data.result));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteAdminOrModerator/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.result?.deletedCount === 1) {
                    const newData = editors.filter(editor => editor._id !== id);
                    setEditors(newData);
                    toast.success('Deleted successfully', {
                        theme: 'dark',
                    })
                }
            });

    }
    const handleChange = (e) => {
        const totalRowCount = parseInt(e.target.value);
        setSelectRowCount(totalRowCount);
    }
    const handleUpdate = (id) => {
        Navigate(`/updateAdminInformation/${id}`);
    }
    const editorsSliceData = editors.slice(0, selectRowCount);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-1">
                    <SideNav></SideNav>
                </div>
                <div className="col-md-11 col-sm-12 col-12 bg-secondary-subtle">
                    <h2 className=" text-center mt-5">Update Admin and Moderators</h2>

                    <div className="row m-5 text-center justify-content-center">
                        {editors.length === 0 && <PacmanLoader color="#36d7b7"></PacmanLoader>}
                        <table className="table table-bordered table-hover table-light">
                            <thead className="table-danger">
                                <tr>
                                    <th scope="col " className="d-flex" >
                                        <div className="">
                                            <select onChange={handleChange} name="selectRow" id="" className="form-select" aria-label="Default select example">
                                                <option value="5">5</option>
                                                <option value="10">10</option>
                                                <option value="15">15</option>
                                                <option value="20">20</option>
                                                <option value="25">25</option>
                                                <option value={editors.length}>All</option>
                                            </select>
                                        </div>
                                        <div className='mx-auto'>Email Address</div>
                                    </th>
                                    <th scope="col">User Status</th>
                                    <th scope="col">Edit/Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    editorsSliceData?.map(editor =>
                                        <tr>
                                            <td>{editor.email}</td>
                                            <td>{editor.status}</td>
                                            <td>
                                                <button
                                                    onClick={() => handleUpdate(editor._id)}
                                                    className="btn btn-success me-2">
                                                    <FontAwesomeIcon icon={faPenToSquare} /> Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(editor._id)}
                                                    className="btn btn-danger ms-2"
                                                >
                                                    <FontAwesomeIcon icon={faTrash} /> Delete
                                                </button>
                                            </td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AdminModeratorList;