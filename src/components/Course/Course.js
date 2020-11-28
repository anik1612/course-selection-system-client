import React from 'react';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const { name, img, instructor } = props.course;
    const addToCart = props.addToCart;

    return (
        <div className="col-md-6">
            <div className="single-item text-center my-3">
                <div className="card">
                    <img className="card-img-top" style={{ height: "200px" }} src={img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6>Instructor: {instructor}</h6>
                        <button className="btn btn-sm btn-success"
                            onClick={() => addToCart(props.course)}><FontAwesomeIcon icon={faPlusCircle} /> Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;