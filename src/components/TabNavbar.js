import React from 'react';
import { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.png";
import styles from "../styles/Tab.module.css";

const TabNavbar = () => {
    const [active, setActive] = useState(true);

    const handleActive = (title) => {
        if(title === "home") {
            setActive(true)
        } else {
            setActive(false)
        }
    }
    return (
        <>
            <Container>
                <Nav className={styles.nav_container} defaultActiveKey="/" as="ul">
                    <Nav.Item as="li">
                        <NavLink className={styles.nav_link} to="/">Homepage</NavLink>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <NavLink className={styles.nav_link} to="/all/products">All Products</NavLink>
                    </Nav.Item>
                    <Nav.Item as="li" className="ml-auto">
                        <NavLink className={styles.nav_link} to="/">
                            <img className={styles.logo} src={logo} alt="company logo"/>
                        </NavLink>
                    </Nav.Item>
                </Nav>
                <hr className={styles.hr_bottom}/>
            </Container>
        </>
    );
};

export default TabNavbar;