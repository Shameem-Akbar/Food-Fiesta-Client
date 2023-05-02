import React from 'react';
import error from '../../assets/error.png'
import { Container } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <Container className='d-lg-flex mt-4 mt-lg-0'>
                <div className='d-flex flex-column justify-content-center align-items-center text-center'>
                    <h2 className='fs-1 fw-bold mt-5 mb-3'>WE ARE SORRY,  <br /> PAGE NOT FOUND!</h2>
                    <Link style={{ textDecoration: 'none' }} to="/home"><button className="btn btn-danger d-flex fw-semibold fs-5 align-items-center gap-2"> <FaArrowLeft />Go To Home</button></Link>
                </div>
                <div className='lg-w-75 h-25'>
                    <img className='w-100 h-25' src={error} alt="" />
                </div>
            </Container>
        </div>
    );
};

export default PageNotFound;