import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Chef from '../Chef/Chef';

const Home = () => {

    const [chefs, setChefs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => {
                setChefs(data);
                setLoading(false);
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <Container>
            {loading ?
                <div className='d-flex justify-content-center my-5 py-5'>
                    <Spinner animation="border" /><h4 className='ms-3'>Loading...</h4>
                </div>
                :
                <div>
                    <h1 className='text-center fw-bold mb-4 pt-2 pt-lg-0' style={{ fontSize: "4rem" }}>Our Chefs</h1>
                    <div className='row'>
                        {
                            chefs.map(chef => <Chef
                                key={chef.id}
                                chef={chef}
                            ></Chef>)
                        }
                    </div>
                </div>}
        </Container>
    );
};

export default Home;