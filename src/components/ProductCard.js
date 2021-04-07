import React from 'react';
import { Card } from 'react-bootstrap';
import styles from "../styles/ProductsCart.module.css";

const ProductCard = ({item}) => {
    const {title, category, currentPrice, previousPrice, discountRate, img} = item;
    return (
        <>
            <div>
                <Card className={styles.card_container}>
                    <Card.Img className={styles.product_image} variant="top" src={img} />
                    <Card.Body>
                        <p className={styles.title}> {title} </p>
                        <p className={styles.category}> {category} </p>
                        <p className={styles.current_price}>BDT. {currentPrice} </p>
                        <div className={styles.previous_price_section}>
                        <p className={styles.previous_price}> <del> BDT. {previousPrice} </del> </p>
                        <p className={styles.discount_rate}> {discountRate} off </p>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default ProductCard;