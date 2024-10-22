import React from 'react';
import styles from './promoSection.module.css';

const PromoSection = () => {
  return (
    <>
      {/* Bloco Vermelho com os textos promocionais */}
      <section className={styles.promoContent}>
        <h1>Unique Solutions for Unique Journeys</h1>
        <p>
          Discover how our strategic and technological expertise supports your business growth.
        </p>
        <button className={styles.promoButton}>
          Schedule a meeting with our experts now!
        </button>
      </section>

      {/* Bloco Cinza Claro com o formulário de inscrição */}
      <section className={styles.signupSection}>
        <div className={styles.signupContent}>
          <div className={styles.signupText}>
          <i className="fa fa-envelope"></i>
            <h2>Prepare-se para um mundo em constante <br/> Transformação.</h2>
            <p>Inscreva-se para receber nossos conteúdos.</p>
          </div>
          <form className={styles.signupForm}>
            <label htmlFor="email">E-mail*</label>
            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
            <div className={styles.checkboxContainer}>
                <input type="checkbox" id="exampleCheckbox" name="exampleCheckbox" />
                <label htmlFor="exampleCheckbox" className={styles.checkboxLabel}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </label>
            </div>
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default PromoSection;
