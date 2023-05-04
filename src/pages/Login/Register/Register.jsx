import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import login from '../../../assets/login.jpg'

const Register = () => {
    return (
        <Container>
            <div className='row'>
                <div className='col-md-6 order-2 order-lg-1'>
                    <img className='w-100' src={login} alt="" />
                </div>
                <div className='mx-auto mb-5 col-md-4 border border-2 p-4 rounded order-1 shadow'>
                    <h2>Please Register</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Your Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter Email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicCheckbox">
                            <Form.Check

                                type="checkbox"
                                name="accept"
                                label={<>Accept <Link to="/terms" style={{ textDecoration: 'none' }}>Terms and Conditions</Link> </>} />
                        </Form.Group>

                        <Button className='fw-semibold col-12 py-2 my-1 border-0' variant="primary" type="submit" style={{ backgroundColor: "#FF5915", }}>
                            Register
                        </Button>
                        <br />
                        <Form.Text className="text-secondary">
                            Already have an account? <Link className=' fw-bold' to="/login" style={{ textDecoration: 'none', color: "#FF5915" }}>Login</Link>
                        </Form.Text>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default Register;