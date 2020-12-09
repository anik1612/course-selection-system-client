import { faEdit, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Axios from 'axios'

const ShowCourses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:5000/course')
            .then(data => {
                setCourses(data.data.data)
            })
    }, [])

    const deleteCourse = (id) => {
        Axios.delete(`http://localhost:5000/course/${id}`)
            .then(data => {
                if (data.data.success) {
                    const restCourse = courses.filter(course => course._id !== id);
                    setCourses(restCourse);
                    swal('success', `${data.message}`, 'success')
                } else {
                    swal('error', `something went wrong`, 'error')
                }
            })
    }

    const editCourse = (id) => {

    }

    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-md-2 pl-0">
                    <Sidebar />
                </div>
                <div className="col-md-10 mt-5">
                    <div className="row">
                        {
                            courses.map(course => {
                                return (

                                    <div className="col-md-4 py-3">
                                        <div className="card">
                                            {course.img ?
                                                <img className="card-img-top" style={{ height: "200px" }} src={course.img} alt="" />
                                                : <img className="card-img-top" style={{ height: "200px" }} src='https://fakeimg.pl/300/' alt="" />
                                            }
                                            <div className="card-body">
                                                <h5 className="card-title">{course.name ? course.name : course.courseName}</h5>
                                                <h6>Instructor: {course.instructor ? course.instructor : course.courseTeacher}</h6>
                                                <button
                                                    className="btn btn-sm btn-success mr-3"
                                                    onClick={() => deleteCourse(course._id)}
                                                >
                                                    <FontAwesomeIcon
                                                        className="mr-2"
                                                        icon={faMinusCircle}
                                                    />
                                                    Delete Course
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-success"
                                                    onClick={() => editCourse(course._id)}
                                                >
                                                    <FontAwesomeIcon
                                                        className="mr-2"
                                                        icon={faEdit}
                                                    />
                                                    Edit Course
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ShowCourses;