import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={styles.layoutSection}>
        <footer className={styles.footer}>
          <div className={styles.columnStart}>
            {/* Primeira coluna: Logo e Copyright */}
            <div className={styles.columnItemsStart}>
              <div className={styles.logo}>
                <Image
                  src="/assets/logo.png"
                  alt="Digi Heart Beat"
                  width={100}
                  height={50}
                />
              </div>
              <p className={styles.copyright}>
                Copyright ©2024 All Rights Reserved
              </p>
            </div>
          </div>

          <div className={styles.column}>
            {/* Segunda coluna: Título "Follow us" e ícones das redes sociais */}
            <div className={styles.columnItemsStart}>
              <h4 className={styles.disclaimer}>Follow us</h4>
              <div className={styles.socialIcons}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            {/* Terceira coluna: Links inline com separação por pipes */}
            <div className={styles.inlineLinks}>
              <a href="#">About Us</a>
              <span>|</span>
              <a href="#">Services</a>
              <span>|</span>
              <a href="#">Contact Us</a>
              <span>|</span>
              <a href="#">Privacy & Legal</a>
              <span>|</span>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
