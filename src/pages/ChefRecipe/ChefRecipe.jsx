import React from 'react';
import { Container } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipe = () => {
    const { id } = useParams();
    const chef = useLoaderData();
    const { chef_picture, chef_name, years_of_experience, num_recipes, likes, short_bio } = chef;
    console.log(chef);
    return (
        <Container>
            <div className="card mb-3" >
                <div className="row g-0 p-2">
                    <div className="col-md-4">
                        <img src={chef_picture} className="img-fluid rounded-start" alt="..." style={{ minHeight: '16.7rem' }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ">
                            <h5 className="card-title fs-1" style={{ color: "#FF5915", }}>{chef_name}</h5>
                            <p className="card-text text-secondary mb-1">{short_bio}</p>
                            <p className="card-text mb-1"><span className='fw-semibold'>Years of Experience:</span> <span className='text-secondary'>{years_of_experience}</span></p>
                            <p className="card-text mb-1"><span className='fw-semibold'>No. of Recipes:</span> <span className='text-secondary'>{num_recipes}</span></p>
                            <p className='card-text d-flex align-items-center gap-1'><FaThumbsUp className='me-1' style={{ color: "#FF5915", }}></FaThumbsUp>    <span className='text-secondary'>{likes}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ChefRecipe;