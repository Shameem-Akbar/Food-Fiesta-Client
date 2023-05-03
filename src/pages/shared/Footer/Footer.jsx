import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarker, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container>
            <footer className="pt-4">
                <Row className='border-top pt-4'>
                    <div className="col-6 col-md-3 mb-3">
                        <h5>CONTACT US
                        </h5>
                        <div>
                            <div className='d-flex'>
                                <FaMapMarker className='mt-1 me-2' style={{ color: "#FF5915" }}></FaMapMarker>
                                <p>7th Floor, Royal Building, New York City, USA </p>
                            </div>
                            <div className='d-flex'>
                                <FaPhoneAlt className='mt-1 me-2' style={{ color: "#FF5915" }}></FaPhoneAlt>
                                <p>(555) 555-1234</p>
                            </div>
                            <div className='d-flex'>
                                <FaEnvelope className='mt-1 me-2' style={{ color: "#FF5915" }}></FaEnvelope>
                                <p>info@foodfiesta.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>INFORMATION</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link className='text-secondary' style={{ textDecoration: 'none' }}>About us</Link></li>
                            <li className="nav-item mb-2"><Link className='text-secondary' style={{ textDecoration: 'none' }}>Delivery Information</Link></li>
                            <li className="nav-item mb-2"><Link className='text-secondary' style={{ textDecoration: 'none' }}>Contact us</Link></li>
                            <li className="nav-item mb-2"><Link className='text-secondary' style={{ textDecoration: 'none' }}>Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3 mb-3">
                        <h5>OPEN HOURS</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 text-secondary">Monday - Friday : 9 am to 12 am.</li>
                            <li className="nav-item mb-2 text-secondary">Saturday - Sunday : 24 Hour Open</li>
                            <li className="nav-item mb-2 text-secondary">Breakfast : 7 am to 12 pm</li>
                            <li className="nav-item mb-2 text-secondary">Lunch : 12 pm to 7 pm</li>
                            <li className="nav-item mb-2 text-secondary">Dinner : 7 am to 12 am</li>
                        </ul>
                    </div>

                    <div className="col-md-3 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Get update about the new food menu coming to our restaurant.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"></input>
                                <button className="btn text-white border-0" style={{ backgroundColor: "#FF5915" }} type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </Row>

                <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 border-top">
                    <p>&copy; 2023 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3 fs-5"><Link><FaFacebook style={{ color: "#FF5915" }}></FaFacebook></Link></li>
                        <li className="ms-3 fs-5"><Link><FaInstagram style={{ color: "#FF5915" }}></FaInstagram></Link></li>
                        <li className="ms-3 fs-5"><Link><FaTwitter style={{ color: "#FF5915" }}></FaTwitter></Link></li>
                    </ul>
                </div>
            </footer>
        </Container>
    );
};

export default Footer;