import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Teachers from '../Teachers/Teachers';

const TeacherLog = () => {
    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/user/teacher')
            .then(res => res.json())
            .then(data => {
                setTeachers(data.data)
            })
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    swal('success', 'Teacher Deleted Successfully', 'success')
                    // refreshUI()
                    const remainTeacher = teachers.filter(student => student._id !== id)
                    setTeachers(remainTeacher)
                } else {
                    swal('error', 'Something went wrong', 'error')
                }
            })
    }

    // const refreshUI = () => {
    //     fetch('http://localhost:5000/user/student')
    //         .then(res => res.json())
    //         .then(data => {
    //             setTeachers(data.data)
    //         })
    // }

    const handleEdit = (id) => {

    }

    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-md-2 pl-0">
                    <Sidebar />
                </div>
                <div className="col-md-9 ml-5 mt-5">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Username</th>
                                <th scope="col">ID</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                teachers.map(teacher =>
                                    <Teachers
                                        teacher={teacher}
                                        key={teacher._id}
                                        handleDelete={handleDelete}
                                        handleEdit={handleEdit}
                                    />
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TeacherLog;