import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from "../styles/HomePages.module.css"

const HomePages = () => {
    return (
        <>
            <Container>
                <div className={styles.home_container}>
                    <div className={styles.home_content}>
                        <p className={styles.welcome}>Welcome to <span className={styles.company__name}> Zaynax E-Shopping</span>, where you found your dream products easily. Are you ready? <span><NavLink to="/all/products">Find Products</NavLink></span></p>
                        <div className={styles.home_img}>
                            <img className={styles.main_img} src="https://media.giphy.com/media/cmCHuk53AiTmOwBXlw/giphy.gif" alt=""/>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default HomePages;