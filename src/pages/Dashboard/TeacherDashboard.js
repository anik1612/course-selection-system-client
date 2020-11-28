import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import TeacherSidebar from '../../components/TeacherSidebar/TeacherSidebar';

const TeacherDashboard = () => {
    return (
        <div className='teacher-dashboard'>
            <Header />
            <div className='row d-flex justify-content-between'>
                <div className='col-md-2 pl-0'>
                    <TeacherSidebar />
                </div>
                <div className='col-md-8 mt-5'>
                    <h1 className='font-weight-bold text-success'>Working on this currently</h1> 
                    <h2 className='ml-5 pl-5 text-danger'>Coming very soon..</h2>
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard;