import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date();
    return (
        <div className='footer-section bg-dark py-4 fixed-bottom'>
            <div className='container text-center'>
                <p
                    className='text-white lead'
                >
                    Copyright &copy; {date.getFullYear()} || All rights reversed by
                    <span
                        className='font-weight-bold'
                    >
                        <a
                            className='text-success text-underline-none ml-1'
                            href='https://facebook.com/aniksarker1612'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Anik Sarker
                        </a>
                    </span>
                </p>
                <p
                    className='font-weight-bold text-white mb-0 d-flex justify-content-center'
                >
                    <a className='text-white lead mr-3'
                        href='https://github.com/anik1612'
                        target='_blank'
                        rel='noopener noreferrer'
                    >Follow me on GITHUB</a>
                    <a className='text-white lead'
                        href='mailto:aniksarker1612@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'
                    >Mail Me</a>
                </p>
            </div>
        </div>
    );
};

export default Footer;