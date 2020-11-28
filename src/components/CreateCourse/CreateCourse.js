import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const CreateCourse = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => {
        const courseId = data.courseId;
        const courseName = data.courseName;
        const courseTeacher = data.courseTeacher;
        const courseCredit = data.courseCredit;

        fetch('http://localhost:5000/createCourse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ courseId, courseName, courseTeacher, courseCredit })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    swal('Good Job', 'Course created successfully!', 'success')
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
                                <h1 className='text-dark font-weight-bold mb-3 mb-4'>Create New Course</h1>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text" className='form-control mb-3' name="courseId" placeholder="Enter Course ID" ref={register({ required: true })} />
                                    {errors.courseId && <p className='text-danger'>this is can't be blank</p>}
                                    <input type="text" className='form-control mb-3' name="courseName" placeholder="Enter Course Name" ref={register({ required: true })} />
                                    {errors.courseName && <p className='text-danger'>this is can't be blank</p>}
                                    <input type="text" className='form-control mb-3' name="courseCredit" placeholder="Enter Credit" ref={register({ required: true })} />
                                    {errors.courseCredit && <p className='text-danger'>this is can't be blank</p>}
                                    <input type="text" className='form-control mb-3' name="courseTeacher" placeholder="Enter Teacher Name" ref={register({ required: true })} />
                                    {errors.courseTeacher && <p className='text-danger'>this is can't be blank</p>}
                                    <input type="submit" className='btn btn-block font-weight-bold btn-outline-primary' value="Submit"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CreateCourse;