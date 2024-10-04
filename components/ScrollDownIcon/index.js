// ScrollDownIcon/index.js
import styles from './ScrollDownIcon.module.css';

export default function ScrollDownIcon() {
    const handleScroll = () => {
        const nextSection = document.querySelector('#conteudo');
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

      return (
        <div className={styles.iconContainer} onClick={handleScroll}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            viewBox="0 0 16 16"
            className={styles.icon}
          >
            <path
              fillRule="evenodd"
              d="M8 12a.5.5 0 0 1-.354-.146l-5-5a.5.5 0 1 1 .708-.708L8 10.793l4.646-4.647a.5.5 0 0 1 .708.708l-5 5A.5.5 0 0 1 8 12z"
            />
          </svg>
        </div>
      );
};