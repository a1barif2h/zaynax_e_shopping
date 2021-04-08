import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from '../components/Blog/Blog';
import Paginate from '../components/Paginate';
import SearchNavbar from '../components/SearchNavbar';
import Services from '../components/services/Services';
import Sidebar from '../components/Sidebar/Sidebar';

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
                <Blog />
                <Services />
            </Container>
            
        </>
    );
};

export default AllProducts;