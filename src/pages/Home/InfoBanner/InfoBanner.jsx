import React from 'react';
import { Container } from 'react-bootstrap';
import pic1 from '../../../assets/cooks.png'
import pic2 from '../../../assets/donation.png'
import pic3 from '../../../assets/members.png'
import pic4 from '../../../assets/menu.png'

const InfoBanner = () => {
    return (
        <div className='my-4' style={{ backgroundColor: "#FF5915", color: "white" }}>
            <Container className='d-flex justify-content-around py-4'>
                <div className='d-flex align-items-center'>
                    <img src={pic1} style={{ width: "4rem", height: '4rem', color: "white" }} className='me-3' alt="" />
                    <div>
                        <h1 className='mb-0'>30+</h1>
                        <p className='mb-0 fs-5'>Cooks</p>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <img src={pic2} style={{ width: "4rem", height: '4rem' }} className='me-3' alt="" />
                    <div>
                        <h1 className='mb-0'>20+</h1>
                        <p className='mb-0 fs-5'>Outlets</p>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <img src={pic3} style={{ width: "4rem", height: '4rem' }} className='me-3' alt="" />
                    <div>
                        <h1 className='mb-0'>150+</h1>
                        <p className='mb-0 fs-5'>Staffs</p>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <img src={pic4} style={{ width: "4rem", height: '4rem' }} className='me-3' alt="" />
                    <div>
                        <h1 className='mb-0'>350+</h1>
                        <p className='mb-0 fs-5'>Menus</p>
                    </div>
                </div>

            </Container>
        </div >
    );
};

export default InfoBanner;