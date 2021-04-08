import React from 'react';
import { servicesList } from '../../fakeData/servicesList';
import ServiceCard from './ServiceCard';
import styles from "../../styles/Services.module.css";

const Services = () => {
    const allServicesList = servicesList;
    return (
        <>
            <div className={styles.service_container}>
                    {
                        allServicesList.map(item => 
                            <ServiceCard key={item.id} item={item} />
                        )
                    }
            </div>
            <hr className={styles.hr_bottom}/>
        </>
    );
};

export default Services;