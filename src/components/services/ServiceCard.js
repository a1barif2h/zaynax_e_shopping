import React from 'react';
import styles from "../../styles/Services.module.css"

const ServiceCard = ({item}) => {
    const {title, img, description} = item;
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_img}>
                    <img className={styles.c_img} src={img} alt=""/>
                </div>
                <div className={styles.card_content}>
                    <p className={styles.title}>
                        {title}
                    </p>
                    <p className={styles.description}>
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;