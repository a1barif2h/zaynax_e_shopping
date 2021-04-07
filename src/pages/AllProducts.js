import React from 'react';
import { Container } from 'react-bootstrap';
import SearchNavbar from '../components/SearchNavbar';

const AllProducts = () => {
    return (
        <>
            <Container>
                <SearchNavbar />
                <h1>this is all products</h1>
            </Container>
            
        </>
    );
};

export default AllProducts;