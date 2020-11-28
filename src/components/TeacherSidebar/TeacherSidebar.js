import React from 'react';
import { Link } from 'react-router-dom';

const TeacherSidebar = () => {
    return (
        <div className='bg-custom py-3' style={{ height: '100vh' }}>
            <ul className='pl-0'>
                <li className='border-bottom d-flex justify-content-start pl-3'>
                    <Link to='/dashboard/createCourse' className='text-decoration-none dashboard-link my-3'>
                        Edit Profile
                    </Link>
                </li>
                <li className='border-bottom d-flex justify-content-start pl-3'>
                    <Link to='/dashboard/showCourses' className='text-decoration-none dashboard-link my-3'>
                        Courses
                    </Link>
                </li>
                <li className='border-bottom d-flex justify-content-start pl-3'>
                    <Link to='/dashboard/studentReg' className='text-decoration-none dashboard-link my-3'>
                        Assigned Courses
                    </Link>
                </li>
                <li className='border-bottom d-flex justify-content-start pl-3'>
                    <Link to='/dashboard/studentLog' className='text-decoration-none dashboard-link my-3'>
                        Student Scoring
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default TeacherSidebar;