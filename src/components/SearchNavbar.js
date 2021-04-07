import React from 'react';
import { useState } from 'react';
import { Form, FormControl, Navbar } from 'react-bootstrap';
import { FaCaretDown, FaCaretUp, FaSistrix } from "react-icons/fa";
import styles from "../styles/SearchNavbar.module.css";

const SearchNavbar = () => {
    const [caretDown, setCaretDown] = useState(true);
    const [caretUp, setCaretUp] = useState(false);

    const handleCartDown = () => setCaretDown(!caretDown);
    const handleCaretUp = () => setCaretUp(!caretUp)
    return (
        <>
            <Navbar className={styles.nav_container} expand="lg">
                <Navbar.Brand>
                    <div className={styles.showing_result_container}>
                        <p className={styles.showing_result}>Showing 1 – 40 of 80,068 products </p>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className={styles.main_container}>
                        <div className={`${styles.refine_container}`}>
                            <span className={styles.refine_title}>Refine by</span>
                            <hr className={styles.refine_border} />
                            <Form>
                                <div className="d-flex justify-content-around">
                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Control onClick={handleCartDown} className={styles.refine_option} as="select">
                                    <option>Price</option>
                                    <option>Price1</option>
                                    <option>Price2</option>
                                    <option>Price3</option>
                                    <option>Price4</option>
                                    </Form.Control>
                                </Form.Group>
                                {
                                    caretDown ? <FaCaretDown className={styles.refine_icon} /> :
                                    <FaCaretUp className={styles.refine_icon} />
                                }
                                </div>
                            </Form>
                        </div>
                        <div className={`${styles.sort_container}`}>
                            <span className={styles.refine_title}>Sort by</span>
                            <hr className={styles.refine_border} />
                            <Form>
                                <div className="d-flex justify-content-around">
                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Control onClick={handleCaretUp} className={styles.refine_option} as="select">
                                    <option>Best Sellers</option>
                                    <option>Best Sellers1</option>
                                    <option>Best Sellers2</option>
                                    <option>Best Seller3</option>
                                    <option>Best Sellers4</option>
                                    </Form.Control>
                                </Form.Group>
                                {
                                    caretUp ? <FaCaretUp className={styles.refine_icon} /> :
                                    <FaCaretDown className={styles.refine_icon} /> 
                                }
                                </div>
                            </Form>
                        </div>
                    </div>
                    <Form className="ml-auto" inline>
                    <FormControl type="text" placeholder="Search" className={`mr-sm-2 ${styles.search_box}`} />
                    <FaSistrix className={styles.search} />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <hr className={styles.hr_bottom}/>
        </>
    );
};

export default SearchNavbar;