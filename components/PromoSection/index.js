import React from 'react';
import styles from './promoSection.module.css';

const PromoSection = () => {
  return (
    <section className={styles.promoContent}>
      {/* Bloco Vermelho com os textos promocionais */}
      <section className={styles.promoContentUnique}>
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
          <i className={`fa fa-envelope ${styles.iconBlack}`}></i>            
          <h2>Prepare-se para um mundo em constante <br/> Transformação.</h2>
            <p>Inscreva-se para receber nossos conteúdos.</p>
          </div>
          <form className={styles.signupForm}>
            <label htmlFor="email">E-mail*</label>
            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required  className={styles.email}/>
            <div className={styles.checkboxContainer}>
                <input type="checkbox" id="exampleCheckbox" name="exampleCheckbox" />
                <label htmlFor="exampleCheckbox" className={styles.checkboxLabel}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br />
                 nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <br />
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit <br />
                   esse cillum dolore eu fugiat nulla pariatur.
                </label>
            </div>
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default PromoSection;
