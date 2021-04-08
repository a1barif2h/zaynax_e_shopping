import React from 'react';
import { Card } from 'react-bootstrap';
import { BiCalendar } from 'react-icons/bi';
import { RiMessage2Line } from 'react-icons/ri';
import styles from "../../styles/Blog.module.css"

const BlogCard = ({item}) => {
    const {img, type, date, message} = item
    return (
        <>
            <div className={styles.card_main_container}>
                <Card style={{backgroundImage: `url(${img})`}} className={styles.card_container}>
                    <div className={styles.type}>
                        <p> {type} </p>
                    </div>
                    <div className={styles.card_bottom}>
                        <p>
                            <BiCalendar className={styles.date_icon} /> <span className={styles.date}>{date}</span>
                        </p>
                        <p className={styles.message}> 
                            <RiMessage2Line className={styles.message_icon} /> {message}
                        </p>
                    </div>
                </Card>
           </div>
        </>
    );
};

export default BlogCard;