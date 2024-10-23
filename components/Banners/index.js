import React from 'react';
import styles from './banner.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannersHome = () => {
    return (
        <div className={styles.bannercontainer}>
            <video autoPlay loop muted className={styles.backgroundvideo}>
                <source src="/assets/animacao.mp4" type="video/mp4" />
            </video>
            <div className={styles.bannerslider}>
                <div className={styles.bannercontent}>
                    <h1 className={styles.bannertitle}>
                    Few companies can promise that business<br /> is fully aligned with technology.
                        <span className={styles.span}> We can</span>
                    </h1>

                    <p className={styles.bannerdescription}>
                    Business Growth and Innovation | Customer Strategy | Sales | Marketing |< br />
                    Data & AI | Digital Products | Technology
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default BannersHome;