import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import styles from "../styles/Footer.module.css";
import footerBanner from "../images/assets/footer.png";
import bkash from "../images/assets/bkash.png";
import nagad from "../images/assets/nagad.png";
import rocket from "../images/assets/rocket.png";
import visa from "../images/assets/visa.png";
import mster from "../images/assets/mster.png";
import amex from "../images/assets/amex.png";
import customer from "../images/assets/customer-service-2-line.png";
import phone from "../images/assets/phone-line.png";
import mail from "../images/assets/mail-send-line.png";
import { RiSendPlaneFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <>
            <hr className={styles.hr_bottom}/>
            <footer className={styles.footer_section}>
                <div className={styles.social_section}>
                    <FaFacebookF />
                    <AiOutlineTwitter className="ml-4 mr-4" />
                    <FaLinkedinIn />
                    <GrInstagram className="ml-4 mr-4" />
                    <AiFillYoutube />
                </div>
                <div className={styles.footer_container}>
                    <Container>
                        <Row>
                            <Col md={3} className={styles.banner_section}>
                                <img src={footerBanner} className={styles.banner_img} alt=""/>
                            </Col>
                            <Col md={6} className={styles.subscribe_section}>
                                <div className={styles.subscribe_input}>
                                    <p className={styles.sub_title}>SUBSCRIBE</p>
                                    <p className={styles.sub_description}>Get the latest news from zDrop</p>
                                    <input type="email" placeholder="Email address" className={styles.sub_input}/>
                                    <RiSendPlaneFill className={styles.input_icon} />
                                </div>
                                <div className={styles.option_container}>
                                    <p>About zDrop</p>
                                    <p>FAQ & Support </p>
                                    <p>Terms & Conditions</p>
                                    <p>Privacy Policy</p>
                                </div>
                                <div className={styles.payment_option_container}>
                                    <div>
                                        <img src={bkash} alt=""/>
                                    </div>
                                    <div>
                                        <img src={nagad} alt=""/>
                                    </div>
                                    <div>
                                        <img src={rocket} alt=""/>
                                    </div>
                                    <div>
                                        <img src={visa} alt=""/>
                                    </div>
                                    <div>
                                        <img src={mster} alt=""/>
                                    </div>
                                    <div>
                                        <img src={amex} alt=""/>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3} className={styles.contact_section}>
                                <p className={styles.contact_title}>CONTACT US</p>
                                <p className={styles.hotline}>
                                    <img src={customer} alt=""/> Hotline : 
                                </p>
                                <p  className={styles.hotline_num}>+8801929459195 (10am-10pm/Sat-Thur)</p>
                                <p  className={styles.hotline}>
                                    <img src={phone} alt=""/> Whole Sales : 
                                </p>
                                <p  className={styles.hotline_num}>01929459195 (10am-12pm)</p>
                                <p className={styles.hotline}>
                                    <img src={mail} alt=""/> Email : 
                                </p>
                                <p  className={styles.hotline_num}>support.example@gmail.com</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    );
};

export default Footer;