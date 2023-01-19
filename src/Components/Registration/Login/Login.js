import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.config.init';

const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    const handleGoogleLogin = (e) => {
        signInWithGoogle();
    }
    if (user || googleUser) {
        navigate('/')
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className=' text-center mt-5 mb-3'>Please Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input name="email" required type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input required name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating mb-3 d-flex">
                            <input className='btn btn-success me-2' type="submit" value="Login" />
                            <Link to='/register'>No Account? Please Register</Link>
                        </div>
                    </form>

                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='border-top w-50 p-1'></div>
                        <div className='mb-2 p-2'>or</div>
                        <div className='border-top w-50 p-1'></div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 text-center">
                    <button onClick={handleGoogleLogin} className="btn btn-Light border border-warning me-2">Login With Google</button>
                    <button className="btn btn-Light border border-primary">Login With Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Login;