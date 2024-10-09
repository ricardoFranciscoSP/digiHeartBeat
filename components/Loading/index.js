import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './loading.module.css';

const words = ['Building', 'your', 'business', 'pulse'];

const LoadingComponent = ({ onAnimationEnd }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const logoTimeout = setTimeout(() => {
      setShowLogo(true);
      const textTimeout = setTimeout(() => {
        setShowText(true);
      }, 2000); // Espera 2 segundos para começar o texto
      return () => clearTimeout(textTimeout);
    }, 1000); // O logo aparece em 1 segundo
    return () => clearTimeout(logoTimeout);
  }, []);

  useEffect(() => {
    if (showText && currentWord < words.length) {
      const wordTimeout = setTimeout(() => {
        setCurrentWord((prev) => prev + 1);
      }, 500); // Atraso de 500ms entre as palavras
      return () => clearTimeout(wordTimeout);
    } else if (currentWord === words.length) {
      const endTimeout = setTimeout(() => {
        setFadeOut(true);
        const fadeOutTimeout = setTimeout(() => {
          onAnimationEnd();
        }, 1000); // Duração do fade-out
        return () => clearTimeout(fadeOutTimeout);
      }, 3000); // Espera 3 segundos após a última palavra
      return () => clearTimeout(endTimeout);
    }
  }, [showText, currentWord, onAnimationEnd]);

  return (
    <div className={styles.App}>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted className={styles.backgroundVideo}>
          <source src="/assets/animacao.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 1 }}
            animate={{ opacity: fadeOut ? 0 : 1 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.column + ' ' + styles.left}>
              {showLogo && (
                <motion.img
                  src="/assets/logo.png" // Coloque o caminho do seu logo
                  alt="Logo"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                  className={styles.logo}
                />
              )}
            </div>
            <div className={styles.column + ' ' + styles.right}>
              {showText && (
                <div className={styles.text}>
                  {words.slice(0, currentWord).map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className={styles.word}
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;