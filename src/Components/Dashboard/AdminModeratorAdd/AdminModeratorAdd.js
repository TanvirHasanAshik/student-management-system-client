import React, { useState } from 'react';
import { toast } from 'react-toastify';
import SideNav from '../SideNav/SideNav';

const AdminModeratorAdd = () => {
    const [status, setStatus] = useState('');
    const [error, setError] = useState(null);

    const handleChange = e => {
        setStatus(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const user = e.target.status.value;
        const email = e.target.email.value;
        const data = { user, email };

        fetch('http://localhost:5000/adminOrModerator', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.result?.insertedId) {
                    toast.success(`${status} added successfully.`, {
                        theme: 'dark'
                    });
                    setError(null)
                } else {
                    setError(data);
                }
            })


        // setError(`The ${access?.email} already an ${access?.status}`);
        e.target.reset();
    }



    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-1">
                    <SideNav></SideNav>
                </div>
                <div className="col-md-11 col-sm-12 col-12 bg-secondary-subtle">
                    <h2 className=" text-center mt-5 mb-4">Add Admin / Moderator</h2>

                    {error !== null ? <div className="col-md-4 mx-auto alert alert-danger text-center mt-3" role="alert">
                        {`Already this ${error.email} is an ${error.status}`}
                    </div> : ''}

                    <form onSubmit={handleSubmit}>
                        <div className="row g-5  mb-5 pb-5 justify-content-center">
                            <div className="col-md-4 mb-3">
                                <div className='mb-3'>
                                    <label className="form-label">Admin / Moderator</label>
                                    <select onChange={handleChange} className="form-select" aria-label="Default select example" name="status" required>
                                        <option selected disabled>Select Admin Or Moderator</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Moderator">Moderator</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" name='email' className="form-control" placeholder='Enter Email Address' required />
                                </div>
                                <div>
                                    <button type='submit' className=" mt-3 btn btn-success">
                                        Add {status}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AdminModeratorAdd;