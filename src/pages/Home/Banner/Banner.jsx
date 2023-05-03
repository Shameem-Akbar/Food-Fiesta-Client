import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='pt-lg-4 pb-lg-5'>
            <div className='py-lg-5'>
                <div className='text-center py-lg-5 mb-5'>
                    <h1 className='text-white pt-lg-5' style={{ fontSize: "4.2rem" }}>Experience The Best Only <br /> Taste Of America</h1>
                    <button className="btn mt-2 mt-lg-4 mb-5 fw-semibold text-white fs-3 rounded-3 border-0" style={{ backgroundColor: "#FF5915", }} type="button">Order Now <FaArrowRight className='mb-1'></FaArrowRight> </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;