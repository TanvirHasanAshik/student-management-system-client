import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
const AdminModeratorUpdate = () => {
    const { id } = useParams();
    const [users, setUsers] = useState([]);
    const singleUser = users.find(user => user._id === id);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/adminAndModerators')
            .then(res => res.json())
            .then(data => setUsers(data.result));
    }, []);

    const handleUpdate = e => {
        e.preventDefault();
        const email = singleUser?.email;
        const status = e.target.status.value;
        const updateData = { email, status };

        fetch(`http://localhost:5000/updateAdminModerator/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.matchedCount > 0) {
                    navigate('/showAdminModerator');
                }
            });

        e.target.reset();
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h3 className="mt-5 mb-5">Update Admin or Moderator information</h3>
                    <div className="border fw-bolder border-success p-3 mb-3">
                        {!singleUser ? <HashLoader color="#36d7b7" />
                            : <div>
                                <p>Email:  <span className="text-danger">{singleUser?.email}</span> </p>
                                <p>Status: <span className="text-danger">{singleUser?.status}</span> </p>
                            </div>}
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" value={singleUser?.email} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Status</label>
                            <select name="status" className="form-select" aria-label="Default select example">
                                <option disabled>Select Your Option</option>
                                <option value="Admin">Admin</option>
                                <option value="Moderator">Moderator</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminModeratorUpdate;