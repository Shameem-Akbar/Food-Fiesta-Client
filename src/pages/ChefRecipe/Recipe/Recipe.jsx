import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaRegBookmark } from 'react-icons/fa';
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
    const { _id, photo_url, recipe_name, ingredients, cooking_method, rating } = recipe;

    const notify = () => toast.success("Recipe Added To Favourite!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        notify();
        setIsDisabled(true);
    };

    return (
        <div className='col-md-4 mb-3 mb-lg-4'>
            <Card className='p-2 shadow border border-3 h-100'>
                <Card.Img variant="top" src={photo_url} style={{ height: "14rem" }} />
                <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Card.Title style={{ color: "#FF5915", }}>{recipe_name}</Card.Title>
                        <Card.Text className='mb-1 d-flex align-items-center'>
                            <button disabled={isDisabled} onClick={handleClick} className="btn fw-semibold text-white rounded-3 border-0" style={{ backgroundColor: "#FF5915", }} type="button"><FaRegBookmark></FaRegBookmark> Favourite</button>
                            <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="colored" />
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