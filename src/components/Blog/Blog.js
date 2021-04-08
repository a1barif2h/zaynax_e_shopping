import React from 'react';
import styles from "../../styles/Blog.module.css"
import CardSlider from './CardSlider';

const Blog = () => {
    return (
        <>
            <div className={styles.blog_container}>
                <div className={styles.blog_header}>
                    <p className={styles.blog_title}>
                        LATEST BLOGS
                    </p>
                    <p className={styles.blog_description}>
                        This is a place devoted to giving you deeper insight into the news, trends, people and technology behind Bing.
                    </p>
                </div>
                <CardSlider />
            </div>
        </>
    );
};

export default Blog;