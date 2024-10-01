import React from 'react';
import styles from './banner.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const BannersHome = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
    };

    return (
        <div className={styles.bannercontainer}>
            <video autoPlay loop muted className={styles.backgroundvideo}>
                <source src="/assets/animacao.mp4" type="video/mp4" />
            </video>
            <Slider {...settings} className={styles.bannerslider}>
                <div className={styles.bannercontent}>
                    <h1 className={styles.bannertitle}>
                        Few companies can promisse that<br /> everything is Integrated.
                        <span className={styles.span}> We can</span>
                    </h1>

                    <p className={styles.bannerdescription}>
                        Business growth & Innovation | Customer Strategy | Sales | MKT <br />
                        Data & AI | Digital Products | Technology 
                    </p>
                </div>
                <div className={styles.bannercontent}>
                    <h1 className={styles.bannertitle}>
                        Another headline<br /> with different content.
                        <span className={styles.span}> Example 2</span>
                    </h1>
                    <p className={styles.bannerdescription}>
                        Different content for<br /> the second slide.
                    </p>
                </div>
                <div className={styles.bannercontent}>
                    <h1 className={styles.bannertitle}>
                        Yet another headline<br /> with more content.
                        <span className={styles.span}> Example</span>
                    </h1>
                    <p className={styles.bannerdescription}>
                        More content for<br /> the third slide.
                    </p>
                </div>
            </Slider>
        </div>
    );
};

export default BannersHome;