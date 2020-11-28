import React from 'react';

const Students = ({ student, handleDelete, handleEdit }) => {
    return (
        <>
            <tr>
                <th scope="row">{student.username}</th>
                <td>{student._id}</td>
                <td>
                    <button onClick={() => handleEdit(student._id)} className="btn btn-warning">
                        edit
                    </button>
                    <button onClick={() => handleDelete(student._id)} className="btn btn-danger ml-2">
                        delete
                    </button>
                </td>
            </tr>
        </>
    );
};

export default Students;