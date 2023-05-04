import React from 'react';
import { Card } from 'react-bootstrap';
import { FaArrowRight, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { chef_picture, chef_name, years_of_experience, num_recipes, likes } = chef;

    return (
        <div className='col-md-4 mb-3 mb-lg-4'>
            <Card className='p-2 shadow border border-3'>
                <Card.Img variant="top" src={chef_picture} style={{ height: "14rem" }} />
                <Card.Body>
                    <Card.Title className='fs-3' style={{ color: "#FF5915", }}>{chef_name}</Card.Title>
                    <Card.Text className='mb-1 fs-5'>
                        <span className='fw-semibold'>Years of Experience:</span>    <span className='text-secondary'>{years_of_experience}</span>
                    </Card.Text>
                    <Card.Text className='mb-1 fs-5'>
                        <span className='fw-semibold'>No. of Recipes:</span>    <span className='text-secondary'>{num_recipes}</span>
                    </Card.Text>
                    <Card.Text className='mb-1 d-flex align-items-center fs-5'>
                        <FaThumbsUp className='me-1' style={{ color: "#FF5915", }}></FaThumbsUp>    <span className='text-secondary'>{likes}</span>
                    </Card.Text>
                    <Link to={`/chef/${chef.id}`}>
                        <button className="btn mt-2 fw-semibold px-3 py-2 text-white rounded-3 border-0" style={{ backgroundColor: "#FF5915", }} type="button">View Recipes <FaArrowRight className='mb-1'></FaArrowRight> </button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Chef;