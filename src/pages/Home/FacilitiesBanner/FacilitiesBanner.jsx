import React from 'react';
import { Container } from 'react-bootstrap';
import park from '../../../assets/park.png'
import charge from '../../../assets/charge.png'
import wifi from '../../../assets/wifi.png'

const FacilitiesBanner = () => {
    return (
        <div className='my-4' style={{ backgroundColor: "#FF5915", color: "white" }}>
            <Container className='py-4'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        <h2 className='text-center pb-3 pb-lg-0'>
                            Dining with modern
                            cusine & deliver effective facilities to you
                        </h2>
                    </div>
                    <div className='col-lg-6'>
                        <div className='d-flex justify-content-lg-between justify-content-evenly'>
                            <div className='d-lg-flex align-items-center gap-2'>
                                <img src={charge} alt />
                                <h5 className='text-center mt-2 '>Mobile <br /> Charge</h5>
                            </div>
                            <div className='d-lg-flex align-items-center gap-2'>
                                <img src={wifi} alt />
                                <h5 className='text-center mt-2'>High Speed <br /> Wi-Fi</h5>
                            </div>
                            <div className='d-lg-flex align-items-center gap-2'>
                                <img src={park} alt />
                                <h5 className='text-center mt-2'>Car <br /> Parking</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FacilitiesBanner;