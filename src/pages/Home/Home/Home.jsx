import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Chef from '../Chef/Chef';

const Home = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    console.log(chefs);

    return (
        <Container>
            <h1 className='text-center fw-bold mb-4 pt-2 pt-lg-0' style={{ fontSize: "4rem" }}>Our Chefs</h1>
            <div className='row'>
                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }
            </div>
        </Container>
    );
};

export default Home;