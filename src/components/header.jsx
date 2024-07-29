import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Logo Here</h1>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/content">Generate Content</Link>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;
