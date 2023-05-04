import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { FaArrowLeft, FaThumbsUp } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Recipe from './Recipe/Recipe';

const ChefRecipe = () => {
    const { id } = useParams();
    const chef = useLoaderData();
    const { chef_picture, chef_name, years_of_experience, num_recipes, likes, short_bio } = chef;

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/chef-recipe/${id}`)
            .then(res => res.json())
            .then(data => {
                setRecipes(data);
                setLoading(false);
            })
    }, [])

    return (
        <div>
            <Container className="card mb-3" >
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
            </Container>
            <div style={{ backgroundColor: "#FF5915", }} className='text-white py-2 my-4'>
                <h1 className='text-center fw-semibold mb-2 pt-2 pt-lg-0' style={{ fontSize: "3.5rem" }}>Chef&apos;s Famous Recipe</h1>
            </div>
            <Container>
                {loading ?
                    <div className='d-flex justify-content-center my-5 py-5'>
                        <Spinner animation="border" /><h4 className='ms-3'>Loading...</h4>
                    </div>
                    :
                    <div className='row'>
                        {
                            recipes.map(recipe => <Recipe
                                key={recipe._id}
                                recipe={recipe}
                            ></Recipe>)
                        }
                    </div>
                }
            </Container>
            <Container className='mb-4'>
                <Link to='/'>
                    <button className="btn mt-2 fw-semibold px-3 py-2 text-white rounded-3 border-0" style={{ backgroundColor: "#FF5915", }} type="button"><FaArrowLeft className='mb-1'></FaArrowLeft> Back To Home </button></Link>
            </Container>
        </div>
    );
};

export default ChefRecipe;