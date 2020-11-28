import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const StudentRegister = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => {
        const username = data.username;
        const password = data.password;
        const role = 'student';

        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, role })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    swal('Success', 'New Student account created!', 'success')
                    e.target.reset();
                }
            })
            .catch(error => {
                swal('Bad Request', 'Something went wrong', 'error');
            })
    };

    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-md-2 pl-0">
                    <Sidebar />
                </div>
                <div className="col-md-10 mt-5">
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-6'>
                            <div className="card card-body">
                                <h1 className='text-dark font-weight-bold mb-3 mb-4'>Register New Student</h1>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text" className='form-control mb-3' name="username" placeholder="Enter Username" ref={register({ required: true })} />
                                    {errors.username && <p className='text-danger'>this is can't be blank</p>}
                                    <input type="text" className='form-control mb-3' name="password" placeholder="Enter Password" ref={register({ required: true })} />
                                    {errors.password && <p className='text-danger'>this is can't be blank</p>}
                                    <input type="submit" className='btn btn-block font-weight-bold btn-outline-primary' value="Submit"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentRegister;