import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { blogList } from '../../fakeData/blogList';
import BlogCard from './BlogCard';
import styles from ".././../styles/CardSlider.module.css";

const CardSlider = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
      const allBlogList = blogList;
    return (
        <>
            <div className={styles.slider_container}>
                <Carousel
                    className={styles.react_multi_carousel_list}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {
                        allBlogList.map(item => <BlogCard key={item.id} item={item}  />)
                    }
                </Carousel>
                <div className={styles.decor1}></div>
                <div className={styles.decor2}></div>
            </div>
        </>
    );
};

export default CardSlider;