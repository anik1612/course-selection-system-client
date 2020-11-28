import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import { UserContext } from '../../App';

const LoginForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const [LoggedInUser, setLoggedInUser] = useContext(UserContext)

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard" } };

    const isRedirect = (res) => {
        if(res){
            history.replace(from)
        }
    }

    const onSubmit = data => {
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(resData => {
                setLoggedInUser({
                    isSignedIn: true,
                    username: resData.data.username,
                    role: resData.data.role
                })
                isRedirect(true)
                swal('Hurray!', 'login successful', 'success');
            })
            .catch(error => {
                swal('error', `username or password doesn't match`, 'error');
                isRedirect(false);
            })
    }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center mb-3 pb-1 mt-5'>
                <div className='sign-in-form border border rounded px-5 py-5 bg-white'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-group">
                            <label for="username">UserName</label>
                            <input type="text" name='username' class="form-control" id="username" ref={register({ required: true })} />
                            <small id="username" class="form-text text-danger">
                                {errors.username && `* This field can't be empty`}
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" name='password' class="form-control" id="password" ref={register({ required: true })} />
                            <small id="password" class="form-text text-danger">
                                {errors.password && `* This field can't be empty`}
                            </small>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Forgot Password</label>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default LoginForm;