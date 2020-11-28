import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Shop.css'
import useLocalStorageState from 'use-local-storage-state/dist';
import StudentSidebar from '../StudentSidebar/StudentSidebar';
import Header from '../Header/Header';


const Shop = () => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useLocalStorageState('cart', []);

    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => {
                setCourses(data.data)
            })
    }, [])

    //add item to cart
    const addToCart = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <Header />
            <div className="row d-flex justify-content-between">
                <div className="col-md-2 pl-0">
                    <StudentSidebar />
                </div>

                <div className="col-md-6 row course-area border-right border-top pt-3 courses-container">
                    {courses.map(course => <Course course={course} key={course.id} addToCart={addToCart}></Course>)}
                </div>

                <div className="col-md-3 cart-area pt-4 cart-container border-top">
                    <h3 className="text-center">Course Enrolled: {cart.length}</h3>
                    <ul className="list-group">
                        {cart.map(course => <Cart course={course} />)}
                    </ul>
                    <button type="button" className="btn btn-success btn-block mb-5">
                        show schedule <span className="badge badge-light"></span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Shop;