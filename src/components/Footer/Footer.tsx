import styles from './Footer.module.css';

const date = new Date();

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy;Copyright {date.getFullYear()} by Carlos Rojas</p>
    </footer>
  );
}

export default Footer;
