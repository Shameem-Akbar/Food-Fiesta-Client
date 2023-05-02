import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    return (
        <div>
            <Container className='mt-4 mb-4'>
                <Navbar className='shadow p-3 mb-5 bg-body-tertiary rounded' collapseOnSelect expand="lg" variant="light">
                    <Container>
                        <Link to='/home'><Navbar.Brand className='py-0 me-0'><img src={logo} alt="" /></Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto pe-5 gap-4 fs-5 fw-semibold">
                                <Link to='/home' className='text-secondary' style={{ textDecoration: 'none' }}>Home</Link>
                                <Link to='/about' className='text-secondary' style={{ textDecoration: 'none' }}>About</Link>
                                <Link to='/chef-recipe' className='text-secondary' style={{ textDecoration: 'none' }}>Chef&apos;s Recipe</Link>
                                <Link to='/blog' className='text-secondary' style={{ textDecoration: 'none' }}>Blog</Link>
                                <Link to='/about' className='text-secondary' style={{ textDecoration: 'none' }}>Contact</Link>
                            </Nav>
                            <Nav className='d-flex flex-row align-items-center mt-2 ps-lg-5 ms-lg-5'>
                                <div><FaUserCircle className='fs-3 me-2'></FaUserCircle></div>
                                <Link to='/login'>
                                    <Button variant="dark">Login</Button>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavigationBar;