import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FaRegBookmark } from 'react-icons/fa';
import '@smastrom/react-rating/style.css'

const Recipe = ({ recipe }) => {
    const { _id, photo_url, recipe_name, ingredients, cooking_method, rating } = recipe;

    return (
        <div className='col-md-4 mb-3 mb-lg-4'>
            <Card className='p-2 shadow border border-3 h-100'>
                <Card.Img variant="top" src={photo_url} style={{ height: "14rem" }} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title style={{ color: "#FF5915", }}>{recipe_name}</Card.Title>
                        <Card.Text className='mb-1 d-flex align-items-center'>
                            <FaRegBookmark className='me-1' style={{ color: "#FF5915", }}> </FaRegBookmark>
                        </Card.Text>
                    </div>
                    <div className='mb-1'>
                        <span className='fw-semibold'>Ingredients:</span>
                        {
                            ingredients.map(ingredient => <p className='mb-0'
                                key={ingredient}><li>{ingredient}</li> </p>)
                        }
                    </div>
                    <Card.Text className='mb-1'>
                        <span className='fw-semibold'>Cooking Method:</span>
                        {cooking_method}
                    </Card.Text>
                    <Card.Text className='d-flex gap-1'>
                        <span className='fw-semibold'>Rating: </span>
                        <div className='me-1 mt-1'>
                            <Rating
                                style={{ maxWidth: 90 }}
                                value={rating} readOnly />
                        </div>
                    </Card.Text>


                </Card.Body>
            </Card>
        </div>
    );
};

export default Recipe;