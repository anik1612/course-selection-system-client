import React from 'react';

const Teachers = ({ teacher, handleDelete, handleEdit }) => {
    return (
        <>
            <tr>
                <th scope="row">{teacher.username}</th>
                <td>{teacher._id}</td>
                <td>
                    <button onClick={() => handleEdit(teacher._id)} className="btn btn-warning">
                        edit
                    </button>
                    <button onClick={() => handleDelete(teacher._id)} className="btn btn-danger ml-2">
                        delete
                    </button>
                </td>
            </tr>
        </>
    );
};

export default Teachers;