import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarker, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="pt-3 pt-lg-4 border-top text-white" style={{ backgroundColor: "#FF5915" }}>
                <Container className="mb-3">
                    <Row className='d-flex align-items-center pb-3'>
                        <div className='col-md-6'>
                            <h1>Subscribe Our Newsletter</h1>
                        </div>
                        <div className='col-md-6'>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Your Email address"></input>
                                <button className="btn border border-light text-white" type="button" >Subscribe</button>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className=' py-1'>
                <Container>
                    <footer>
                        <Row>
                            <div className="col-6 col-md-4 mb-3">
                                <h5>CONTACT US
                                </h5>
                                <div className='w-75'>
                                    <div className='d-flex'>
                                        <FaMapMarker className='mt-1 me-2' style={{ color: "#FF5915" }}></FaMapMarker>
                                        <p className='mb-0'>7th Floor, Royal Building, NYC, USA </p>
                                    </div>
                                    <hr className='my-1' style={{ color: "#FF5915" }} />
                                    <div className='d-flex'>
                                        <FaPhoneAlt className='mt-1 me-2' style={{ color: "#FF5915" }}></FaPhoneAlt>
                                        <p className='mb-0'>(555) 555-1234</p>
                                    </div>
                                    <hr className='my-1' style={{ color: "#FF5915" }} />
                                    <div className='d-flex'>
                                        <FaEnvelope className='mt-1 me-2' style={{ color: "#FF5915" }}></FaEnvelope>
                                        <p>info@foodfiesta.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 mb-3">
                                <h5>INFORMATION</h5>
                                <ul className="nav flex-column w-75">
                                    <li className="nav-item"><Link className='text-black' style={{ textDecoration: 'none' }}>About us</Link></li>
                                    <hr className='my-2' style={{ color: "#FF5915" }} />
                                    <li className="nav-item"><Link className='text-black' style={{ textDecoration: 'none' }}>Delivery Information</Link></li>
                                    <hr className='my-2' style={{ color: "#FF5915" }} />
                                    <li className="nav-item"><Link className='text-black' style={{ textDecoration: 'none' }}>Contact us</Link></li>
                                    <hr className='my-2' style={{ color: "#FF5915" }} />
                                    <li className="nav-item"><Link className='text-black' style={{ textDecoration: 'none' }}>Terms & Conditions</Link></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-4 mb-3">
                                <h5>OPEN HOURS</h5>
                                <ul className="nav flex-column w-75">
                                    <li className="nav-item text-black">Monday - Friday : 9 am to 12 am.</li>
                                    <hr className='my-2' style={{ color: "#FF5915" }} />
                                    <li className="nav-item text-black">Saturday - Sunday : 24 Hour Open</li>
                                    <hr className='my-2' style={{ color: "#FF5915" }} />
                                    <li className="nav-item text-black">Breakfast : 7 am to 12 pm</li>
                                    <hr className='my-2' style={{ color: "#FF5915" }} />
                                    <li className="nav-item text-black">Lunch : 12 pm to 7 pm</li>
                                    <hr className='my-2' style={{ color: "#FF5915" }} />
                                    <li className="nav-item text-black">Dinner : 7 am to 12 am</li>
                                </ul>
                            </div>
                        </Row>


                    </footer>
                </Container>
            </div>
            <div className="pt-4 border-top text-white" style={{ backgroundColor: "#FF5915" }}>
                <Container className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                    <p>&copy; 2023 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3 fs-5"><Link><FaFacebook style={{ color: "white" }}></FaFacebook></Link></li>
                        <li className="ms-3 fs-5"><Link><FaInstagram style={{ color: "white" }}></FaInstagram></Link></li>
                        <li className="ms-3 fs-5"><Link><FaTwitter style={{ color: "white" }}></FaTwitter></Link></li>
                    </ul>
                </Container>
            </div>
        </div>
    );
};

export default Footer;