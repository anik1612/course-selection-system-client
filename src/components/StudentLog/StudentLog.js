import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Students from '../Students/Students';
import Axios from 'axios'

const StudentLog = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:5000/user/student')
            .then(res => res.json())
            .then(data => {
                setStudents(data.data.data)
            })
    }, [])

    const handleDelete = (id) => {
        Axios.delete(`http://localhost:5000/user/${id}`)
            .then(data => {
                if (data.data) {
                    const remainStudent = students.filter(student => student._id !== id);
                    setStudents(remainStudent);
                    swal('success', 'Account Deleted successfully', 'success');
                } else {
                    swal('error', 'Something went wrong', 'error');
                }
            })
    }

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
                                students.map(student =>
                                    <Students
                                        student={student}
                                        key={student._id}
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

export default StudentLog;