import React from 'react';
import { Card, Col, Form, FormControl, Navbar, Row } from 'react-bootstrap';
import { FaSistrix, FaTimes } from 'react-icons/fa';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import {AiFillStar} from "react-icons/ai";
import styles from "../styles/Sidebar.module.css";
import { brandList } from '../fakeData/brandList';
import { countryList } from '../fakeData/contreyList';
import { fabricList } from '../fakeData/fabricList';
import { patternList } from '../fakeData/patternList';

const Sidebar = () => {
    const allBrandList = brandList;
    const allCountryList = countryList;
    const allFabricList = fabricList;
    const allPatternList = patternList;

    const fiveStar = <div className={styles.star_container}><AiFillStar className={styles.star} /><AiFillStar className={styles.star} /><AiFillStar className={styles.star} /><AiFillStar className={styles.star} /><AiFillStar className={styles.star} /></div>;
    const fourStar = <div className={styles.star_container}><AiFillStar className={styles.star} /><AiFillStar className={styles.star} /><AiFillStar  className={styles.star}/><AiFillStar className={styles.star} /></div>;
    const threeStar = <div className={styles.star_container}><AiFillStar className={styles.star} /><AiFillStar className={styles.star} /><AiFillStar className={styles.star} /></div>;
    const twoStar = <div className={styles.star_container}><AiFillStar className={styles.star} /><AiFillStar className={styles.star} /></div>;
    const oneStar = <div className={styles.star_container}><AiFillStar className={styles.star} /></div>;
    return (
        <>
            <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Card className={styles.card_container}>
                <div className={styles.filter_section}>
                    <h4 className={styles.title}>Filters</h4>
                    <div className={styles.out_of_stock}>
                        <p className={styles.filter_name}>Out of Stock</p>
                        <span className={styles.filter_cancel}> 
                            <FaTimes className={styles.cancel} /> 
                        </span>
                    </div>
                    <div className={styles.filter_size}>
                        <p className={styles.filter_name}>Size: XL</p>
                        <span className={styles.filter_cancel}> 
                            <FaTimes className={styles.cancel} /> 
                        </span>
                    </div>
                    <div className={styles.clear_all}>
                        <p>Clear all</p>
                    </div>
                </div>
                <div className={styles.category_section}>
                    <div className={styles.category_title_section}>
                        <h4 className={styles.title}>Category</h4>
                        <BiChevronDown className={styles.category_icon} />
                    </div>
                    <h4 className={styles.category_sub_title}>Men's Clothing</h4>
                    <div className={styles.category_sub_subject}>
                        <p>Casual Wear</p>
                        <p className={styles.last_child}>Shirts</p>
                    </div>
                </div>
                <div className={styles.brand_section}>
                    <div className={styles.brand_title_section}>
                        <h4 className={styles.title}>Brand</h4>
                        <BiChevronDown className={styles.brand_icon} />
                    </div>
                    <Form inline>
                        <FormControl style={{width: "100%"}} type="text" placeholder="Search" className={` ${styles.search_box}`} />
                        <FaSistrix className={styles.search} />
                    </Form>
                    <Form>
                        <fieldset>
                            <Form.Group as={Row}>
                            <Col className={styles.brand_item} sm={10}>
                                {
                                    allBrandList.map(item => <Form.Check
                                        key={item.id}
                                        className={styles.brand_list}
                                        type="radio"
                                        label={item.title}
                                        name="formHorizontalRadios"
                                        id={`formHorizontalRadios${item.id}`}
                                        />)
                                }
                            </Col>
                            </Form.Group>
                        </fieldset>
                    </Form>
                    <h4 className={styles.brand_more}>236 MORE</h4>
                </div>
                <div className={styles.country_section}>
                    <div className={styles.country_title_section}>
                        <h4 className={styles.title}>Country</h4>
                        <BiChevronDown className={styles.country_icon} />
                    </div>
                    <Form>
                        <fieldset>
                            <Form.Group as={Row}>
                            <Col className={styles.country_item} sm={10}>
                                {
                                    allCountryList.map(item => <Form.Check
                                        key={item.id}
                                        className={styles.country_list}
                                        type="radio"
                                        label={item.title}
                                        name="forCountry"
                                        id={`forCountry${item.id}`}
                                        />)
                                }
                            </Col>
                            </Form.Group>
                        </fieldset>
                    </Form>
                    <h4 className={styles.country_more}>2 MORE</h4>
                </div>
                <div className={styles.size_section}>
                    <div className={styles.size_title_section}>
                        <h4 className={styles.title}>Size</h4>
                        <BiChevronDown className={styles.size_icon} />
                    </div>
                    <div className={styles.size_items}>
                        <div className={styles.size_list}>
                            <p className={styles.size_list_value}>XS</p>
                        </div>
                        <div className={styles.size_list}>
                            <p className={styles.size_list_value}>S</p>
                        </div>
                        <div className={styles.size_list}>
                            <p className={styles.size_list_value}>M</p>
                        </div>
                        <div className={styles.size_list}>
                            <p className={styles.size_list_value}>L</p>
                        </div>
                        <div className={styles.size_list}>
                            <p className={styles.size_list_value}>XL</p>
                        </div>
                        <div className={styles.size_list_XXL}>
                            <p className={styles.size_list_value_XXL}>XXL</p>
                        </div>
                    </div>
                </div>
                <div className={styles.color_section}>
                    <div className={styles.color_title_section}>
                        <h4 className={styles.title}>Color</h4>
                        <BiChevronDown className={styles.color_icon} />
                    </div>
                    <div className={styles.color_items}>
                        <div className={styles.color_list}>
                            <p className={styles.color_list_value}></p>
                        </div>
                        <div className={styles.color_list}>
                            <p className={styles.color_list_value1}></p>
                        </div>
                        <div className={styles.color_list}>
                            <p className={styles.color_list_value2}></p>
                        </div>
                        <div className={styles.color_list}>
                            <p className={styles.color_list_value3}></p>
                        </div>
                        <div className={styles.color_list}>
                            <p className={styles.color_list_value4}></p>
                        </div>
                        <div className={styles.color_list}>
                            <p className={styles.color_list_value5}></p>
                        </div>
                    </div>
                </div>
                <div className={styles.discount_section}>
                    <div className={styles.discount_title_section}>
                        <h4 className={styles.title}>Discount</h4>
                        <BiChevronDown className={styles.discount_icon} />
                    </div>
                    <Form>
                        <fieldset>
                            <Form.Group as={Row}>
                            <Col className={styles.discount_item} sm={10}>
                                <Form.Check
                                className={styles.discount_list}
                                type="radio"
                                label="10% - 30%"
                                name="forDiscount"
                                id="forDiscount1"
                                />
                                <Form.Check
                                className={styles.discount_list}
                                type="radio"
                                label="30% - 40%"
                                name="forDiscount"
                                id="forDiscount2"
                                />
                                <Form.Check
                                className={styles.discount_list}
                                type="radio"
                                label="50% - 70%"
                                name="forDiscount"
                                id="forDiscount3"
                                />
                            </Col>
                            </Form.Group>
                        </fieldset>
                    </Form>
                </div>
                <div className={styles.price_section}>
                    <div className={styles.price_title_section}>
                        <h4 className={styles.title}>Price</h4>
                    </div>
                    <div className={styles.price_items_container}>
                        <div className={styles.price_items}>
                            <div className={styles.price_list_min}>
                                <p>Min</p>
                            </div>
                            <div className={styles.price_list_max}>
                                <p>Max</p>
                            </div>
                        </div>
                        <div className={styles.price_list_icon_container}>
                            <div className={styles.price_list_icon_decor}></div>
                            <div className={styles.price_list_icon_main_decor}>
                                <BiChevronRight className={styles.price_icon} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rating_section}>
                    <div className={styles.rating_title_section}>
                        <h4 className={styles.title}>Rating</h4>
                    </div>
                    <Form>
                        <fieldset>
                            <Form.Group as={Row}>
                            <Col className={styles.rating_item} sm={10}>
                                <Form.Check
                                className={styles.rating_list}
                                type="radio"
                                label={fiveStar}
                                name="forRating"
                                id="forRating1"
                                />
                                <Form.Check
                                className={styles.rating_list}
                                type="radio"
                                label={fourStar}
                                name="forRating"
                                id="forRating2"
                                />
                                <Form.Check
                                className={styles.rating_list}
                                type="radio"
                                label={threeStar}
                                name="forRating"
                                id="forRating3"
                                />
                                <Form.Check
                                className={styles.rating_list}
                                type="radio"
                                label={twoStar}
                                name="forRating"
                                id="forRating4"
                                />
                                <Form.Check
                                className={styles.rating_list}
                                type="radio"
                                label={oneStar}
                                name="forRating"
                                id="forRating5"
                                />
                            </Col>
                            </Form.Group>
                        </fieldset>
                    </Form>
                </div>
                <div className={styles.fabric_section}>
                    <div className={styles.fabric_title_section}>
                        <h4 className={styles.title}>Fabric</h4>
                        <BiChevronDown className={styles.fabric_icon} />
                    </div>
                    <Form>
                        <fieldset>
                            <Form.Group as={Row}>
                            <Col className={styles.fabric_item} sm={10}>
                                {
                                    allFabricList.map(item => <Form.Check
                                        key={item.id}
                                        className={styles.fabric_list}
                                        type="radio"
                                        label={item.title}
                                        name="forFabric"
                                        id={`forFabric${item.id}`}
                                        />)
                                }
                            </Col>
                            </Form.Group>
                        </fieldset>
                    </Form>
                    <h4 className={styles.fabric_more}>5 MORE</h4>
                </div>
                <div className={styles.pattern_section}>
                    <div className={styles.pattern_title_section}>
                        <h4 className={styles.title}>Pattern</h4>
                        <BiChevronDown className={styles.pattern_icon} />
                    </div>
                    <Form>
                        <fieldset>
                            <Form.Group as={Row}>
                            <Col className={styles.pattern_item} sm={10}>
                                {
                                    allPatternList.map(item => <Form.Check
                                        key={item.id}
                                        className={styles.pattern_list}
                                        type="radio"
                                        label={item.title}
                                        name="forPattern"
                                        id={`forPattern${item.id}`}
                                        />)
                                }
                            </Col>
                            </Form.Group>
                        </fieldset>
                    </Form>
                    <h4 className={styles.pattern_more}>26 MORE</h4>
                </div>
                <div className={styles.service_section}>
                    <div className={styles.service_title_section}>
                        <h4 className={styles.title}>Service</h4>
                        <BiChevronDown className={styles.service_icon} />
                    </div>
                    <Form>
                        <fieldset>
                            <Form.Group as={Row}>
                            <Col className={styles.service_item} sm={10}>
                                <Form.Check
                                className={styles.service_list}
                                type="radio"
                                label="Cash on Delivery"
                                name="forService"
                                id="forService1"
                                />
                                <Form.Check
                                className={styles.service_list}
                                type="radio"
                                label="Free Shipping"
                                name="forService"
                                id="forService2"
                                />
                            </Col>
                            </Form.Group>
                        </fieldset>
                    </Form>
                </div>
                <div className={styles.clothing_section}>
                    <div className={styles.clothing_title_section}>
                        <h4 className={styles.title}>Clothing</h4>
                        <BiChevronDown className={styles.clothing_icon} />
                    </div>
                </div>
                <div className={styles.men_trend_section}>
                    <div className={styles.men_trend_title_section}>
                        <h4 className={styles.title}>Men's Trend</h4>
                        <BiChevronDown className={styles.men_trend_icon} />
                    </div>
                </div>
                <div className={styles.fit_type_section}>
                    <div className={styles.fit_type_title_section}>
                        <h4 className={styles.title}>Fit Type</h4>
                        <BiChevronDown className={styles.fit_type_icon} />
                    </div>
                </div>
            </Card>
            </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Sidebar;