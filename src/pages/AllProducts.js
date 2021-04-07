import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Paginate from '../components/Paginate';
import SearchNavbar from '../components/SearchNavbar';
import Sidebar from '../components/Sidebar';

const AllProducts = () => {
    return (
        <>
            <Container>
                <SearchNavbar />
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Paginate />
                        </Row>
                    </Col>
                </Row>
            </Container>
            
        </>
    );
};

export default AllProducts;