import React from 'react';
import { useState } from 'react';
import { Col } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { fakeAllProductsList } from '../fakeData/fakeAllProductsList';
// import styles from "../styles/ProductsCart.module.css"
import "../styles/Paginate.css"
import ProductCard from './ProductCard';

const Paginate = () => {
    const allProducts = fakeAllProductsList;

    const [pageNumber, setPageNumber] =useState(0);
    let pageCount;
    const handlePaginate = data => {
        const products = data;
        const productsPerPage = 36;
        const pagesVisited = pageNumber * productsPerPage;
        pageCount = Math.ceil(products.length / productsPerPage)
        return products.slice(pagesVisited, pagesVisited + productsPerPage).map(item => <Col key={item.id} md={3}>
            <ProductCard item={item} />
        </Col>)
    }
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    return (
        <>
            {allProducts && handlePaginate(allProducts)}
            <div className="paginate_container">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName="paginationBtn"
                    previousLinkClassName="previousBtn"
                    nextLinkClassName="nextBtn"
                    disabledClassName="paginationDisabled"
                    activeClassName="paginationActive"
                />
            </div>
        </>
    );
};

export default Paginate;