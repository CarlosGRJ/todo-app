import styles from './Header.module.css';
import IconBulbLogo from '../../assets/icons/IconBulbLogo';

function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <IconBulbLogo />
        ToDoList
      </h1>
    </header>
  );
}

export default Header;
