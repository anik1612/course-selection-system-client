import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import TeacherSidebar from '../TeacherSidebar/TeacherSidebar';
import Axios from 'axios'

const TeacherAssignedCourse = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        const username = loggedInUser.username;
        Axios.get(`http://localhost:5000/teacher/${username}`)
            .then(data => {
                setCourses(data.data.data);
                console.log(courses);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <Header />
            <div className='row d-flex justify-content-between'>
                <div className='col-md-2 pl-0'>
                    <TeacherSidebar />
                </div>
                <div className='col-md-8'>
                    {/* {
                        courses.map(course => )
                    } */}
                </div>
            </div>
        </div>

    );
};

export default TeacherAssignedCourse;