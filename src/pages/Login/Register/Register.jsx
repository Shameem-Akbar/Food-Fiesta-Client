import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import login from '../../../assets/login.jpg'
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [accepted, setAccepted] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        form.reset();
        setError('');
        setSuccess('');


        if (password.length < 6) {
            setError('Password must be 6 characters longer')
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                updateUserData(result.user, name, photo);
                setSuccess('User created successfully')
                console.log(createdUser);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then(() => {
                console.log('user name updated');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <Container>
            <div className='row'>
                <div className='col-md-6 order-2 order-lg-1'>
                    <img className='w-100' src={login} alt="" />
                </div>
                <div className='mx-auto mb-5 col-md-4 border border-2 p-4 rounded order-1 shadow'>
                    <h2>Please Register</h2>
                    <Form onSubmit={handleRegister}>
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
                                onClick={handleAccepted}
                                type="checkbox"
                                name="accept"
                                label={<>Accept <Link to="/terms" style={{ textDecoration: 'none' }}>Terms and Conditions</Link> </>} />
                        </Form.Group>
                        {
                            error && <Form.Text className="text-danger">
                                <span>{error}</span> <br />
                            </Form.Text>
                        }
                        <Button disabled={!accepted} className='fw-semibold col-12 py-2 my-1 border-0' variant="primary" type="submit" style={{ backgroundColor: "#FF5915", }}>
                            Register
                        </Button>
                        <br />
                        {
                            success && <Form.Text className="text-success">
                                <span>{success}</span><br />
                            </Form.Text>
                        }
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