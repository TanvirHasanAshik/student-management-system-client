import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.config.init';
import { async } from '@firebase/util';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const displayName = e.target.displayName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setErrorMessage("Password does not match ");
            return;
        }
        if (password.length < 6) {
            setErrorMessage("Password should be more than 6 characters")
            return;
        } else {
            setErrorMessage('')
        }
        await createUserWithEmailAndPassword(email, password);
        updateProfile({ displayName });
        e.target.reset();
    }
    useEffect(() => {
        if (error) {
            setErrorMessage(error.message);
        }
    }, [error])
    if (user) {
        console.log(user)
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className=' text-center mt-5 mb-3'>Please Registration</h2>
                    <p className='text-danger'>{errorMessage}</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input required name='displayName' type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Full Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input required type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input required name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input required name="confirmPassword" type="password" className="form-control" id="floatingPassword" placeholder="ConfirmPassword" />
                            <label for="floatingPassword">Confirm Password</label>
                        </div>
                        <div className="form-floating mb-3 d-flex">
                            <input className='btn btn-success me-2' type="submit" value="Register" />
                            <Link to='/login'>Already have an account? Please Login</Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Register;