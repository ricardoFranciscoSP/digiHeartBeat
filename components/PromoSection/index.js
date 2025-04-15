import React from "react";
import styles from "./promoSection.module.css";

const PromoSection = () => {
  return (
    <section className={styles.promoContent}>
      {/* Bloco Vermelho com os textos promocionais */}
      <section className={styles.promoContentUnique}>
        <h1>Unique Solutions for Unique Journeys</h1>
        <p>
          Discover how our strategic and technological expertise supports your
          business growth.
        </p>
        <button className={styles.promoButton}>
          Schedule a meeting with our experts now!
        </button>
      </section>

      {/* Bloco Cinza Claro com o formulário de inscrição */}
      <section className={styles.signupSection}>
        <div className={styles.signupContent}>
          <div className={styles.signupText}>
            <i
              className={`fa-regular fa-envelope-open ${styles.iconBlack} ${styles.iconSizeMd} ${styles.iconMobile}`}
            ></i>

            <h2 className={`${styles.titleMedium}`}>
              Prepare-se para um mundo em constante{" "}
              <br className={`${styles.signupTextMediumBrMobile}`} />{" "}
              Transformação.
            </h2>
            <p className={`${styles.subtitleMedium}`}>
              Inscreva-se para receber nossos conteúdos.
            </p>
          </div>

          <form className={styles.signupForm}>
            <div className={styles.fieldForm}>
              <label htmlFor="email">E-mail*</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`${styles.email} ${styles.inputText}`}
              />
            </div>

            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                id="exampleCheckbox"
                name="exampleCheckbox"
              />
              <label htmlFor="exampleCheckbox" className={styles.checkboxLabel}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                efficitur suscipit nibh non incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate.
              </label>
            </div>

            <button
              type="submit"
              className={`${styles.submitButton} ${styles.buttonPrimary}`}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default PromoSection;
