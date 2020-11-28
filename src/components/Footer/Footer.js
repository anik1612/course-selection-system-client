import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date();
    return (
        <div className='footer-section bg-dark py-4 fixed-bottom'>
            <div className='container text-center'>
                <p className='text-white lead'>Copyright &copy; {date.getFullYear()} || All rights reversed by <span className='font-weight-bold text-success'>Anik Sarker</span> </p>
            </div>
        </div>
    );
};

export default Footer;