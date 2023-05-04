import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import login from '../../../assets/login.jpg'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const Login = () => {
    return (
        <Container>
            <div className='row'>
                <div className='col-md-6 order-2 order-lg-1'>
                    <img className='w-100' src={login} alt="" />
                </div>
                <div className='mx-auto mt-1 mb-5 col-md-4 border border-2 p-4 rounded order-1 shadow'>
                    <h2 className='mt-1'>Please Login</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Button className='fw-semibold col-12 py-2 border-0' variant="primary" type="submit" style={{ backgroundColor: "#FF5915", }}>
                            Login
                        </Button>
                        <br />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <hr style={{ width: '50%', borderBottom: '1px solid black' }} />
                            <span className='px-2 text-secondary'>OR</span>
                            <hr style={{ width: '50%', borderBottom: '1px solid black' }} />
                        </div>
                        <Button className='col-12 mb-2 fw-semibold' variant="danger" type="submit">
                            <FaGoogle className='mb-1 me-1'></FaGoogle> Login with Google
                        </Button>
                        <Button className='col-12 fw-semibold mb-2' variant="secondary" type="submit">
                            <FaGithub className='mb-1 me-1'></FaGithub> Login with Github
                        </Button>
                        <Form.Text className="text-secondary">
                            Don&apos;t have an account? <Link className='fw-bold' to="/register" style={{ textDecoration: 'none', color: "#FF5915" }}>Register</Link>
                        </Form.Text>
                    </Form>
                </div>


            </div>
        </Container >
    );
};

export default Login;