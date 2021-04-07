import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SearchNavbar from '../components/SearchNavbar';
import Sidebar from '../components/Sidebar';

const AllProducts = () => {
    return (
        <>
            <Container>
                <SearchNavbar />
                <Row>
                    <Col md={4}>
                        <Sidebar />
                    </Col>
                </Row>
            </Container>
            
        </>
    );
};

export default AllProducts;