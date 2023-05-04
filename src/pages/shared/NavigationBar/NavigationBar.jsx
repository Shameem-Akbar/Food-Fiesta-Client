import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import 'react-tooltip/dist/react-tooltip.css'
import ActiveLink from './ActiveLink/ActiveLink';
import { AuthContext } from '../../../providers/AuthProvider';
import { Tooltip } from 'react-tooltip'

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div>
            <Container className='mb-4'>
                <Navbar className='shadow p-3 mb-5 bg-body-tertiary rounded' collapseOnSelect expand="lg" variant="light">
                    <Container>
                        <Link to='/home'><Navbar.Brand className='py-0 me-0'><img src={logo} alt="" /></Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto pe-5 gap-4 fs-5 fw-semibold">
                                <ActiveLink to='/home'>Home</ActiveLink>
                                <ActiveLink to='/about'>About</ActiveLink>
                                <ActiveLink to='/blog'>Blog</ActiveLink>
                                <ActiveLink to='/contact'>Contact</ActiveLink>
                            </Nav>
                            <Nav className='d-flex flex-row align-items-center mt-2 ps-lg-5 ms-lg-5'>
                                {user &&
                                    <div>
                                        <div className='me-2'
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content={user.displayName}>
                                            <img style={{ width: '2.5rem', height: '2.5rem', borderRadius: 75 }} src={user.photoURL} alt="" data-tip="Your tooltip content" />
                                        </div>
                                        <Tooltip id="my-tooltip" />
                                    </div>
                                }
                                {user ?
                                    <Link to='/login'>
                                        <Button onClick={handleLogOut} className='fw-bold px-3 border-0' style={{ backgroundColor: "#FF5915" }}>Log Out</Button>
                                    </Link> : <Link to='/login'>
                                        <Button className='fw-bold px-3 border-0' style={{ backgroundColor: "#FF5915" }}>Login</Button>
                                    </Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavigationBar;