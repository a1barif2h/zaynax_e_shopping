import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import styles from "../../styles/Sidebar.module.css";

const RadioOptions = ({data, more}) => {
    return (
        <>
            <Form>
                <fieldset>
                    <Form.Group as={Row}>
                    <Col className={more === 2 ? styles.country_item :styles.option_item} sm={10}>
                        {
                            data.map(item => <Form.Check
                                key={item.id}
                                className={styles.option_list}
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
            <h4 className={styles.option_more}>{more} MORE</h4>
        </>
    );
};

export default RadioOptions;