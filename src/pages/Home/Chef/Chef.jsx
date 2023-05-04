import React from 'react';
import { Card } from 'react-bootstrap';
import { FaArrowRight, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id, chef_picture, chef_name, years_of_experience, num_recipes, likes } = chef;

    return (
        <div className='col-md-4 mb-3 mb-lg-4'>
            <Card className='p-2 shadow border border-3'>
                <Card.Img variant="top" src={chef_picture} style={{ height: "14rem" }} />
                <Card.Body>
                    <Card.Title style={{ color: "#FF5915", }}>{chef_name}</Card.Title>
                    <Card.Text className='mb-1'>
                        <span className='fw-semibold'>Years of Experience:</span>    {years_of_experience}
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Card.Text className='mb-1'>
                            <span className='fw-semibold'>No. of Recipes:</span>    {num_recipes}
                        </Card.Text>
                        <Card.Text className='mb-1 d-flex align-items-center'>
                            <FaThumbsUp className='me-1' style={{ color: "#FF5915", }}></FaThumbsUp>    {likes}
                        </Card.Text>
                    </div>
                    <Link to={`/chef/${chef.id}`}>
                        <button className="btn mt-2 fw-semibold px-3 py-2 text-white rounded-3 border-0" style={{ backgroundColor: "#FF5915", }} type="button">View Recipes <FaArrowRight className='mb-1'></FaArrowRight> </button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Chef;