// components/CardsSection.js
import React from 'react';
import styles from './CardsSection.module.css';
import Link from 'next/link';

const CardsSection = () => {
    return (
        <div className={`container-fluid ${styles.background}`}>
            <div className="container">
                <div className="row justify-content-center">
                    {/* Card 1 */}
                    <div className={`col-md-3 mb-4 ${styles.card1}`}>
                        <div className={`card ${styles.cardCustom}`}>
                            <div className={styles.cardNumber}>01.</div> 
                            <div className="card-body">
                                <div  className='card-header-um'>
                                    <span className={`${styles.rightAlign} ${styles.blackText}`}>Customer</span><br />
                                    <div className={`card-title ${styles.gridContainer}`}>
                                        <span className={`${styles.leftAlign} ${styles.grayText}`}>&</span>
                                        <span className={`${styles.rightAlign} ${styles.redText}`}>Business strategy</span>
                                    </div>
                                </div>
                                <p className="card-text">
                                    <strong>We measure your business performance or the potential of your idea </strong>  
                                    by assessing the sales process, market trends, and customer journey.
                                    Combining quantitative data analysis with qualitative insights, 
                                    we identify key gaps and opportunities, aligning strategies with your company’s 
                                    goals.
                                </p>
                                <Link href="#" legacyBehavior>
                                <a className={styles.btnSeeMore}>See More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className={`col-md-3 mb-4 ${styles.card2}`}>
                        <div className={`card ${styles.cardCustom}`}>
                            <div className={styles.cardNumber}>02.</div>
                            <div className="card-body">
                                     <div className={`card-title ${styles.gridContainer}`}>
                                        <span className={`${styles.leftAlign} ${styles.redText}`}> <span className={`${styles.blackText}`}>Product</span> <br />Process</span>
                                        <span className={`${styles.rightAlign} ${styles.grayText}`}>&</span>
                                        
                                    </div>
                                
                                <p className="card-text">
                                    <strong>We help you create incredible products, services, and experiences </strong> by blending imaginative design with <strong>practical solutions. </strong>
                                    Our efficient, lean, and agile mindset ensures innovations are implemented smoothly, building strong trust and engagement across clients and all levels of our business operations.
                                </p>
                                <Link href="#" legacyBehavior>
                                <a className={styles.btnSeeMore}>See More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className={`col-md-3 mb-4 ${styles.card3}`}>
                        <div className={`card ${styles.cardCustom}`}>
                            <div className={styles.cardNumber}>03.</div>
                            <div className="card-body">
                                    <div className={`card-title ${styles.gridContainer}`}>
                                        <span className={`${styles.leftAlign} ${styles.grayText}`}>&</span>
                                        <span className={`${styles.rightAlign} ${styles.redText}`}><span className={`${styles.blackText}`}>Tech</span>  <br /> Trust</span>
                                    </div>
                                <p className="card-text">
                                    <strong>We provide flexible and secure tech solutions. </strong> By 
                                    integrating AI and other innovative technologies within a responsible
                                    framework and strategic network alliances, we tailor solutions to your business 
                                    size and profile.
                                    This ensures competitiveness while addressing the evolving security, privacy,
                                    and ethical challenges of a highly connected, automated world.
                                </p>
                                <Link href="#" legacyBehavior>
                                <a className={styles.btnSeeMore}>See More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className={`col-md-3 mb-4 ${styles.card4}`}>
                        <div className={`card ${styles.cardCustom}`}>
                            <div className={styles.cardNumber}>04.</div>
                            <div className="card-body">
                                <div className='card-header-um'>
                                    <span className={`${styles.leftAlign} ${styles.blackText}`}>Data</span><br />
                                    <div className={`card-title ${styles.gridContainer}`}>
                                        <span className={`${styles.leftAlign} ${styles.grayText}`}>&</span>
                                        <span className={`${styles.redText}`}>Analytics growth</span>
                                    </div>
                                </div>
                                <p className="card-text">
                                    <strong>We reveal valuable insights by combining behavioral data and customer analytics with strategic sales. </strong>
                                    By continuously measuring, segmenting, and adjusting, we ensure precise, 
                                    impactful alignment of sales, product, and marketing strategies, 
                                    reaching the right audience at the right time.
                                </p>
                                <Link href="#" legacyBehavior>
                                <a className={styles.btnSeeMore}>See More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardsSection;
